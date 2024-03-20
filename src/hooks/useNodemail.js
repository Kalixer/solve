"use strict";
require('dotenv').config()
const nodemailer = require("nodemailer");


// async..await is not allowed in global scope, must use a wrapper
async function main() {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.REACT_APP_EMAIL,
        pass: process.env.REACT_APP_PASSWORD_APP
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: process.env.REACT_APP_EMAIL, // sender address
    to: process.env.REACT_APP_EMAIL_TARGET, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "This is a different message", // plain text body
    html: "<b>This is a different message</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main()