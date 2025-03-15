import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // Replace with your SMTP provider
      auth: {
        user: process.env.EMAIL_USER, // Set in .env.local
        pass: process.env.EMAIL_PASS, // Set in .env.local
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "yourbusiness@example.com", // Replace with your business email
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ error: "Error sending email" });
  }
}
