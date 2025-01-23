exports.handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);

  // Use a library like nodemailer or emailjs to send the email
  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // or 'STARTTLS'
    auth: {
      user: 'stuttertutorials@gmail.com',
      pass: '9799265615',
    },
  });

  const mailOptions = {
    from: email,
    to: 'stuttertutorials@gmail.com',
    subject: 'New form submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  await transporter.sendMail(mailOptions);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Email sent successfully!' }),
  };
};
