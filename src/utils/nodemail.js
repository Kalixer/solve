require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const app = express();

// Antes de las rutas
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body

  console.log(name, email, subject, message)

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.REACT_APP_EMAIL,
        pass: process.env.REACT_APP_PASSWORD_APP
        // user: 'alejandro.demo72@gmail.com',
        // pass: 'ytfp pswm hyvi uacn',
    }
  });

  let mailOptions = {
    from: process.env.REACT_APP_EMAIL,
    to: 'al.caceres.ag72@gmail.com', // Aquí va el correo electrónico del destinatario
    subject: subject,
    text: `Nombre: ${name}\nCorreo electrónico: ${email}\nMensaje: ${message}`,
  };

  // Envía el correo electrónico
  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.sendStatus(200); // Envía una respuesta al frontend
  } catch (error) {
    console.error('Error sending email:', error);
    res.sendStatus(500); // Envía una respuesta de error al frontend
  }
})
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});


// async..await is not allowed in global scope, must use a wrapper
// async function main() {

  
  

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: process.env.REACT_APP_EMAIL, // sender address
//     to: process.env.REACT_APP_EMAIL_TARGET, // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "This is a different message", // plain text body
//     html: "<b>This is a different message</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main()