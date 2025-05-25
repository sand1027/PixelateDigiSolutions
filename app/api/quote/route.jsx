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
    const email = formData.get("email");
    const message = formData.get("message");

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
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
      title: "[ New Quote Request ]",
      fields: [
        { label: "Name", value: name },
        { label: "Email", value: email },
        { label: "Message", value: message },
      ],
      footerText: "Pixellate - Crafting Pixel-Perfect Experiences",
    });

    const adminMailOptions = {
      from: `"Pixellate Quote" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO, // e.g., contact@pixellate.dev
      replyTo: email, // Sender’s email (e.g., sender@gmail.com)
      subject: `New Quote Request from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
        ---
        Pixellate - Crafting Pixel-Perfect Experiences
      `,
      html: adminHtml,
    };

    // Auto-reply to user
    const userHtml = getPixelTemplate({
      title: "[ Thank You for Your Quote Request ]",
      fields: [
        { label: "Hi", value: name },
        {
          label: "Message",
          value:
            "Thank you for requesting a quote from Pixellate! We’ve received your inquiry and will respond within 1-2 business days with a tailored proposal.",
        },
      ],
      footerText: "Pixellate - Crafting Pixel-Perfect Experiences",
    });

    const userMailOptions = {
      from: `"Pixellate Quote" <${process.env.EMAIL_USER}>`,
      to: email, // Sender’s email (e.g., sender@gmail.com)
      subject: "Thank You for Your Quote Request",
      text: `
        Hi ${name},
        Thank you for requesting a quote from Pixellate! We’ve received your inquiry and will respond within 1-2 business days with a tailored proposal.
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

    return NextResponse.json({ message: "Quote request sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: `Failed to send email: ${error.message}` },
      { status: 500 }
    );
  }
}
