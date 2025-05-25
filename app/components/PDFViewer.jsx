"use client";
import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PDFViewer({ file }) {
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  const onDocumentLoadError = (error) => {
    setError("Failed to load PDF. Please try again or check the file.");
    setLoading(false);
  };

  return (
    <div className="w-full p-4 overflow-x-auto">
      {loading && (
        <div className="text-center text-gray-500 text-base sm:text-lg">
          Loading PDF...
        </div>
      )}
      {error && (
        <div className="text-center text-red-500 text-base sm:text-lg">
          {error}
        </div>
      )}
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
      >
        <div className="flex flex-col items-center space-y-4">
          {Array.from({ length: numPages || 0 }, (_, i) => (
            <div
              key={i + 1}
              className="w-full max-w-[90%] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] mx-auto border border-gray-300 shadow-lg"
            >
              <Page
                pageNumber={i + 1}
                width={null}
                className="w-full"
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </div>
          ))}
        </div>
      </Document>
    </div>
  );
}
