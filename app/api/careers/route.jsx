import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Shared pixel-themed template function
function getPixelTemplate({ title, fields, footerText }) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; background-color: #1a1a2e; color: #ffffff; }
        .container { max-width: 600px; margin: 20px auto; padding: 10px; }
        .pixel-card {
          background: #1a1a2e;
          border: 4px solid #000000;
          box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.2);
          padding: 20px;
          font-family: 'VT323', Courier, monospace;
        }
        h1 {
          color: #00ff7f;
          font-family: 'Press Start 2P', Courier, monospace;
          font-size: 20px;
          text-align: center;
          margin-bottom: 20px;
          text-shadow: 2px 2px 0 #000000;
        }
        p {
          color: #ffffff;
          font-size: 16px;
          margin: 10px 0;
        }
        .label {
          color: #ffff00;
          font-weight: bold;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
          color: #8a2be2;
          font-family: 'Press Start 2P', Courier, monospace;
          font-size: 12px;
        }
        @media (max-width: 600px) {
          .container { padding: 10px; }
          h1 { font-size: 16px; }
          p { font-size: 14px; }
          .footer { font-size: 10px; }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="pixel-card">
          <h1>${title}</h1>
          ${fields
            .map(
              (field) =>
                `<p><span class="label">${field.label}:</span> ${field.value}</p>`
            )
            .join("")}
          <div class="footer">
            <p>${footerText}</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email"); // Sender’s email
    const projectType = formData.get("projectType"); // Position
    const details = formData.get("details");
    const resume = formData.get("resume");

    // Validate required fields
    if (!name || !email || !projectType || !details) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate resume if provided
    let resumeAttachment = null;
    if (resume && resume instanceof Blob) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(resume.type)) {
        return NextResponse.json(
          { error: "Invalid file type. Please upload PDF, DOC, or DOCX." },
          { status: 400 }
        );
      }
      if (resume.size > 5 * 1024 * 1024) {
        // 5MB limit
        return NextResponse.json(
          { error: "File size exceeds 5MB limit." },
          { status: 400 }
        );
      }
      resumeAttachment = {
        filename: resume.name,
        content: Buffer.from(await resume.arrayBuffer()),
      };
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // e.g., your-email@gmail.com
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    // Email to contact@pixellate.dev
    const adminHtml = getPixelTemplate({
      title: "[ New Careers Submission ]",
      fields: [
        { label: "Name", value: name },
        { label: "Email", value: email },
        { label: "Position", value: projectType },
        { label: "Cover Letter", value: details },
        {
          label: "Resume",
          value: resumeAttachment ? "Attached" : "Not provided",
        },
      ],
      footerText: "Pixellate - Crafting Pixel-Perfect Experiences",
    });

    const adminMailOptions = {
      from: `"Pixellate Careers" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO, // e.g., contact@pixellate.dev
      replyTo: email, // Sender’s email (e.g., sender@gmail.com)
      subject: `New Careers Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Position: ${projectType}
        Cover Letter: ${details}
        Resume: ${resumeAttachment ? "Attached" : "Not provided"}
        ---
        Pixellate - Crafting Pixel-Perfect Experiences
      `,
      html: adminHtml,
      attachments: resumeAttachment ? [resumeAttachment] : [],
    };

    // Auto-reply to user
    const userHtml = getPixelTemplate({
      title: "[ Thank You for Your Application ]",
      fields: [
        { label: "Hi", value: name },
        {
          label: "Message",
          value:
            "Thank you for applying to Pixellate! We’ve received your application and will review it carefully. Our team will contact you within 3-5 business days if your qualifications match our needs.",
        },
        { label: "Your Application", value: `Position: ${projectType}` },
      ],
      footerText: "Pixellate - Crafting Pixel-Perfect Experiences",
    });

    const userMailOptions = {
      from: `"Pixellate Careers" <${process.env.EMAIL_USER}>`,
      to: email, // Sender’s email (e.g., sender@gmail.com)
      subject: "Thank You for Applying to Pixellate",
      text: `
        Hi ${name},
        Thank you for applying to Pixellate! We’ve received your application and will review it carefully. Our team will contact you within 3-5 business days if your qualifications match our needs.
        Your Application:
        Position: ${projectType}
        ---
        Pixellate - Crafting Pixel-Perfect Experiences
      `,
      html: userHtml,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: `Failed to send email: ${error.message}` },
      { status: 500 }
    );
  }
}
