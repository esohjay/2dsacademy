// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import nodemailer from "nodemailer";
// import {google} from 'googleapis'
// const OAuth2 = google.auth.OAuth2;
import { sendEmail } from "../../lib/mail";
import { contactMsg } from "../../utils/emailTemplate";

export default async function handler(req, res) {
  const { name, email, message, phone } = req.body;
  const output = contactMsg(name, phone, email, message);
  sendEmail({
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `Contact form submission from ${name}`,
    html: output,
  });
  // const transporter = nodemailer.createTransport({
  //   host: "smtp.gmail.com",
  //   port: 465,
  //   secure: true,
  //   auth: {
  //     user: process.env.SMTP_USER,
  //     pass: process.env.SMTP_PASSWORD,
  //   },
  // });
  // try {
  //   await transporter.sendMail({
  //     from: email,
  //     to: "2dstechacademy@gmail.com",
  //     subject: `Contact form submission from ${name}`,
  //     html: `<p>You have a contact form submission</p><br>
  //       <p><strong>Email: </strong> ${email}</p><br>
  //       <p><strong>Message: </strong> ${message}</p><br>
  //     `,
  //   });
  // } catch (error) {
  //   return res.status(500).json({ error: error.message || error.toString() });
  // }
  res.status(200).json({ name: req.body.name });
}
