import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email Route
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "emmxgraphix@gmail.com", // ✅ Your email
      pass: "tluzvoroltwouioa", // ✅ Your Gmail App Password
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "emmxgraphix@gmail.com", // ✅ You’ll receive it here too
      subject: `Message from ${name}`,
      text: message,
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
