import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const projectType = formData.get("projectType");
    const details = formData.get("details");
    const resume = formData.get("resume");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const attachments = resume
      ? [
          {
            filename: resume.name,
            content: Buffer.from(await resume.arrayBuffer()),
          },
        ]
      : [];

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Career Application from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Position: ${projectType}
        Cover Letter: ${details}
      `,
      attachments,
    });

    return NextResponse.json(
      { message: "Application sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send application" },
      { status: 500 }
    );
  }
}
