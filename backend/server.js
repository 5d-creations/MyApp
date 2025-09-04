// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

// --- CORS ---
const allowedOrigins = [
  process.env.FRONTEND_URL_LOCAL || "http://localhost:5173",
  "http://localhost:8080",
  process.env.FRONTEND_URL_PROD || "https://5dtech.netlify.app",
].filter(Boolean);

app.use(
  cors({
    origin: (origin, cb) => {
      console.log("🌍 CORS request from:", origin);
      // allow non-browser requests (curl/Postman) if origin is undefined
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
      console.warn("❌ Blocked by CORS:", origin);
      return cb(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// --- PRELIGHT HANDLER (no route pattern parsing) ---
// Handles OPTIONS preflight requests for any path without using app.options('*', ...)
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    const origin = req.headers.origin;

    // If origin is allowed, echo Access-Control headers
    if (!origin || allowedOrigins.includes(origin)) {
      res.header("Access-Control-Allow-Origin", origin || "*");
      res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
      res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
      return res.sendStatus(200);
    }

    // Not allowed origin
    return res.status(403).json({ success: false, error: "Not allowed by CORS" });
  }
  next();
});

app.use(express.json());

// --- Nodemailer Transporter ---
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT || 465),
  secure: String(process.env.EMAIL_SECURE || "true").toLowerCase() === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify SMTP connection
transporter
  .verify()
  .then(() => console.log("✅ SMTP server ready to send emails"))
  .catch((err) => console.error("❌ SMTP verify failed:", err.message));

// Health
app.get("/health", (_req, res) => res.json({ ok: true }));

// Contact Form Email API
app.post("/send-email", async (req, res) => {
  const { name, email, phone, company, projectType, budget, timeline, message } = req.body || {};

  if (!name || !email || !projectType || !budget || !timeline || !message) {
    return res.status(400).json({ success: false, error: "Missing required fields." });
  }

  const plainText = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Company: ${company || "N/A"}
Project Type: ${projectType}
Budget: ${budget}
Timeline: ${timeline}

Message:
${message}
  `.trim();

  const html = `
    <div style="font-family:sans-serif;line-height:1.5">
      <h2>New Contact Form Submission</h2>
      <table cellpadding="6" cellspacing="0" style="border-collapse:collapse">
        <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
        <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone || "N/A")}</td></tr>
        <tr><td><strong>Company</strong></td><td>${escapeHtml(company || "N/A")}</td></tr>
        <tr><td><strong>Project Type</strong></td><td>${escapeHtml(projectType)}</td></tr>
        <tr><td><strong>Budget</strong></td><td>${escapeHtml(budget)}</td></tr>
        <tr><td><strong>Timeline</strong></td><td>${escapeHtml(timeline)}</td></tr>
      </table>
      <h3 style="margin-top:16px">Message</h3>
      <pre style="white-space:pre-wrap;background:#f6f6f6;padding:12px;border-radius:8px">${escapeHtml(
        message
      )}</pre>
    </div>
  `;

  const mailOptions = {
    from: `"5D Tech Website" <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    subject: `New enquiry from ${name} — ${projectType}`,
    text: plainText,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✉️ Contact mail sent:", info.messageId);
    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Email send error:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Escape helper
function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
