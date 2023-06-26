// const User = require('../models/user');
const nodemailer = require('nodemailer');
require('dotenv').config();

  const config = {
    host: 'smtp.meta.ua',
    port: 465,
    secure: true,
    auth: {
      user: 'mygelo@meta.ua',
      pass: process.env.PASSWORD_EMAIL_META_UA,
    },
  };

  const transporter = nodemailer.createTransport(config);
  const emailOptions = {
    from: 'mygelo@meta.ua',
      to: 'oleg.miholap95@gmail.com',
    subject: 'Nodemailer test',
      text: 'Привет. Мы тестируем отправку писем !',
    // text: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Confirm email</a>`,
  };
  //<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Confirm email</a>
  transporter
    .sendMail(emailOptions)
    .then(info => console.log(info))
    .catch(err => console.log(err));

 module.exports = transporter;
