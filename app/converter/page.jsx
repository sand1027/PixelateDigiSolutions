"use client";
import { useState, useEffect, useRef } from "react";
import { PDFDocument } from "pdf-lib";
import { Document as DocxDocument, Packer, Paragraph, TextRun } from "docx";
import { Editor } from "@tinymce/tinymce-react";
import mammoth from "mammoth";
import styles from "../styles/Products.module.css";

export default function ConverterPage() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [editorContent, setEditorContent] = useState("");
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [outputFormat, setOutputFormat] = useState("pdf");
  const [error, setError] = useState(null);
  const [editorLoaded, setEditorLoaded] = useState(false);
  const pdfContentRef = useRef(null);

  useEffect(() => {
    setError(null);
    console.log("ConverterPage mounted");
  }, []);

  useEffect(() => {
    if (file) {
      console.log("File selected:", fileName, fileSize);
      if (file.name.endsWith(".txt")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setEditorContent(e.target.result);
        };
        reader.onerror = (err) => {
          setError("Error reading TXT file: " + err.message);
          console.error("TXT read error:", err);
        };
        reader.readAsText(file);
      } else if (file.name.endsWith(".docx")) {
        file.arrayBuffer().then((arrayBuffer) => {
          mammoth
            .extractRawText({ arrayBuffer })
            .then((result) => {
              setEditorContent(
                result.value || `Content from ${file.name}<br><br>Edit here...`
              );
            })
            .catch((err) => {
              setError("Error extracting DOCX text: " + err.message);
              console.error("DOCX extraction error:", err);
              setEditorContent(`Content from ${file.name}<br><br>Edit here...`);
            });
        });
      } else if (file.name.endsWith(".pdf")) {
        fetchPdfText();
      }
    }
  }, [file, fileName, fileSize]);

  const fetchPdfText = async () => {
    if (!file || !file.name.endsWith(".pdf")) return;
    console.log("Fetching PDF text for:", file.name);
    const formData = new FormData();
    formData.append("file", file);

    try {
      console.log("Making API request to /api/pdf-extract");
      const response = await fetch("/api/pdf-extract", {
        method: "POST",
        body: formData,
      });
      console.log("API response received:", {
        status: response.status,
        statusText: response.statusText,
      });
      if (!response.ok) {
        const text = await response.text();
        console.error("API error response:", text.slice(0, 200));
        throw new Error(
          `API error: ${response.status} ${response.statusText} - ${text.slice(
            0,
            100
          )}...`
        );
      }
      const data = await response.json();
      console.log("API response data:", data);
      if (data.text) {
        setEditorContent(data.text);
      } else {
        setEditorContent(`Content from ${file.name}<br><br>Edit here...`);
        setError("No text extracted from PDF");
      }
    } catch (err) {
      setError(`Error extracting PDF text: ${err.message}`);
      console.error("PDF text extraction error:", err);
      setEditorContent(`Content from ${file.name}<br><br>Edit here...`);
    }
  };

  const handleFileChange = async (e) => {
    try {
      const files = e.target.files;
      if (files && files.length > 0) {
        const selectedFile = files[0];
        if (
          ![".pdf", ".docx", ".txt"].some((ext) =>
            selectedFile.name.toLowerCase().endsWith(ext)
          )
        ) {
          setError("Please upload a PDF, DOCX, or TXT file.");
          console.error("Invalid file type:", selectedFile.name);
          return;
        }
        setFile(selectedFile);
        setFileName(selectedFile.name);
        setFileSize(formatFileSize(selectedFile.size));
        setError(null);
        console.log("File uploaded successfully:", selectedFile.name);
      }
    } catch (err) {
      setError("Error processing file: " + err.message);
      console.error("File processing error:", err);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleRemoveFile = () => {
    setFile(null);
    setFileName("");
    setFileSize("");
    setEditorContent("");
    setError(null);
    console.log("File removed");
  };

  const handleConvert = async () => {
    if (!file) {
      setError("No file selected.");
      console.error("No file selected for conversion");
      return;
    }
    setIsConverting(true);
    setProgress(0);
    setError(null);
    console.log("Starting conversion to:", outputFormat);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 300);

    try {
      if (outputFormat === "pdf") {
        if (file.name.endsWith(".pdf")) {
          const arrayBuffer = await file.arrayBuffer();
          const pdfDoc = await PDFDocument.load(arrayBuffer);
          const pages = pdfDoc.getPages();
          const firstPage = pages[0];
          firstPage.drawText(
            editorContent.replace(/<[^>]+>/g, "").substring(0, 50),
            {
              x: 50,
              y: 50,
              size: 12,
              color: pdfDoc.rgb(0, 0, 0),
            }
          );
          const pdfBytes = await pdfDoc.save();
          const blob = new Blob([pdfBytes], { type: "application/pdf" });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = file.name.replace(".pdf", "-edited.pdf");
          link.click();
          URL.revokeObjectURL(url);
          console.log("PDF edited and downloaded");
        } else {
          const pdfDoc = await PDFDocument.create();
          const page = pdfDoc.addPage();
          page.drawText(editorContent.replace(/<[^>]+>/g, ""), {
            x: 50,
            y: page.getHeight() - 50,
            size: 12,
            color: pdfDoc.rgb(0, 0, 0),
          });
          const pdfBytes = await pdfDoc.save();
          const blob = new Blob([pdfBytes], { type: "application/pdf" });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = file.name.replace(/\.[^/.]+$/, "") + ".pdf";
          link.click();
          URL.revokeObjectURL(url);
          console.log("Non-PDF converted to PDF and downloaded");
        }
      } else if (outputFormat === "docx") {
        const doc = new DocxDocument({
          sections: [
            {
              properties: {},
              children: [
                new Paragraph({
                  children: [
                    new TextRun(editorContent.replace(/<[^>]+>/g, "")),
                  ],
                }),
              ],
            },
          ],
        });

        const blob = await Packer.toBlob(doc);
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = file.name.replace(/\.[^/.]+$/, "") + ".docx";
        link.click();
        URL.revokeObjectURL(url);
        console.log("DOCX downloaded");
      }
      setIsConverting(false);
    } catch (err) {
      setError("Conversion failed: " + err.message);
      console.error("Conversion error:", err);
      setIsConverting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black bg-opacity-90 p-4">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-4xl font-press-start mb-8 text-center text-pixel-green">
          Document Editor
        </h2>
        {error && (
          <div className="pixel-card p-4 mb-4 text-pixel-red font-vt323">
            {error}
          </div>
        )}
        {!file && !isConverting && (
          <div className={styles.fileDropArea}>
            <i className="fas fa-cloud-upload-alt text-4xl text-pixel-blue mb-4"></i>
            <p className="mb-4 font-vt323">Drag & drop your document here</p>
            <p className="text-sm opacity-70 mb-4 font-vt323">or</p>
            <label
              htmlFor="fileInput"
              className="pixel-btn bg-pixel-blue inline-block cursor-pointer"
            >
              Select File
              <input
                type="file"
                id="fileInput"
                className="hidden"
                accept=".pdf,.docx,.txt"
                onChange={handleFileChange}
              />
            </label>
          </div>
        )}
        {(file || isConverting) && (
          <div className="pixel-card p-4 mb-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <i className="fas fa-file text-2xl text-pixel-red mr-4"></i>
                <div>
                  <p className="font-bold font-vt323">{fileName}</p>
                  <p className="text-sm opacity-70 font-vt323">{fileSize}</p>
                </div>
              </div>
              <button
                className="pixel-btn bg-pixel-red text-sm"
                onClick={handleRemoveFile}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        )}
        {file && !isConverting && (
          <div className={styles.splitScreen}>
            <div className={styles.pdfViewer}>
              <h3 className="text-xl font-press-start mb-4 text-pixel-yellow">
                Original Document
              </h3>
              <p className="font-vt323">
                Preview not available. Edit the content below.
              </p>
            </div>
            <div className={styles.pdfEditor}>
              <h3 className="text-xl font-press-start mb-4 text-pixel-yellow">
                Edit Document
              </h3>
              {editorLoaded ? (
                <Editor
                  apiKey="nkfv9l1yx88wmfs9t002g0yxs5ld3ssv8nlpfeo98eixs1tn"
                  onInit={(evt, editor) => {
                    setEditorLoaded(true);
                    console.log("TinyMCE editor initialized", editor);
                  }}
                  onError={(err) => {
                    console.error("TinyMCE initialization error:", err);
                    setError("Failed to load editor: " + err.message);
                  }}
                  init={{
                    height: 300,
                    min_height: 300,
                    menubar: false,
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "print",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "code",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "paste",
                      "code",
                      "help",
                      "wordcount",
                    ],
                    toolbar:
                      "undo redo | formatselect | bold italic backcolor | \
                      alignleft aligncenter alignright alignjustify | \
                      bullist numlist outdent indent | removeformat | help",
                    content_style:
                      "body { font-family:Arial,sans-serif; font-size:14px }",
                  }}
                  value={editorContent}
                  onEditorChange={(content) => {
                    setEditorContent(content);
                    console.log("Editor content updated");
                  }}
                />
              ) : (
                <div className="pixel-card p-4 text-pixel-yellow font-vt323">
                  Loading editor...
                </div>
              )}
              <div className="flex space-x-4 mt-4">
                <select
                  className="pixel-input"
                  value={outputFormat}
                  onChange={(e) => setOutputFormat(e.target.value)}
                >
                  <option value="pdf">PDF</option>
                  <option value="docx">DOCX</option>
                </select>
                <button
                  className="pixel-btn bg-pixel-green"
                  onClick={handleConvert}
                >
                  Convert & Download
                </button>
              </div>
            </div>
          </div>
        )}
        {isConverting && (
          <div className="pixel-card p-6 text-center">
            <div className={styles.pacman}></div>
            <p className="mb-4 font-vt323">Processing your document...</p>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm mt-4 font-vt323">
              {Math.floor(progress)}% complete
            </p>
            <div ref={pdfContentRef} className="hidden">
              <h4 className="text-lg font-press-start mb-2 text-pixel-yellow">
                Converted Document
              </h4>
              <p className="font-vt323">File: {fileName}</p>
              <p className="font-vt323">Size: {fileSize}</p>
              <p className="font-vt323">
                {editorContent.replace(/<[^>]+>/g, "")}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
