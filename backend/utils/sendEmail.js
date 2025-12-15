const nodemailer = require("nodemailer");

const sendEmail = async (email, link) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    to: email,
    subject: "Password Reset",
    html: `<p>Click to reset password:</p>
           <a href="${link}">${link}</a>`,
  });
};

module.exports = sendEmail;
