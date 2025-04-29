// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { firstName, lastName, email, phone, service, message } = req.body;

//     // Create a transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER, // Your email
//         pass: process.env.EMAIL_PASS, // Your email password or app password
//       },
//     });

//     // Email options
//     const mailOptions = {
//       from: email,
//       to: process.env.EMAIL_USER, // Recipient email
//       subject: `New Contact Form Submission from ${firstName} ${lastName}`,
//       text: `
//         Name: ${firstName} ${lastName}
//         Email: ${email}
//         Phone: ${phone}
//         Service: ${service}
//         Message: ${message}
//       `,
//     };

//     // Send email
//     try {
//       await transporter.sendMail(mailOptions);
//       res.status(200).json({ message: "Email sent successfully!" });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Failed to send email" });
//     }
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, service, message } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    // HTML email template for your notification
    const adminHtmlTemplate = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #4CAF50;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p style="font-size: 12px; color: #777;">This email was sent from your website's contact form.</p>
      </div>
    `;

    // HTML email template for the user's confirmation
    const userHtmlTemplate = `
  <div style="font-family: Arial, sans-serif; color: #333;">
    <h2 style="color: #4CAF50;">Thank you for contacting us!</h2>
    <p>Dear ${firstName},</p>
    <p>We have received your message and will get back to you shortly.</p>
    <p><strong>Your Message:</strong></p>
    <p>${message}</p>
    <hr>
    <p style="font-size: 12px; color: #777;">This is an automated confirmation email. Please do not reply.</p>
  </div>
`;

    // Email options for your notification
    const adminMailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: adminHtmlTemplate, // Use HTML for styling
    };

    // Email options for the user's confirmation
    const userMailOptions = {
      from: process.env.EMAIL_USER, // Send from your email
      to: email, // Send to the user
      subject: `Thank you for contacting us, ${firstName}!`,
      html: userHtmlTemplate, // Use HTML for styling
    };

    // Send emails
    try {
      // Send email to yourself
      await transporter.sendMail(adminMailOptions);

      // Send confirmation email to the user
      await transporter.sendMail(userMailOptions);

      console.log("Emails sent successfully!");
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
