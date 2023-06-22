const nodemailer = require('nodemailer');

// Создание транспорта для отправки почты
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mikhail.ivannikov2030@gmail.com', // ваш адрес электронной почты Gmail
    pass: 'mzwrddbdqjznmpix' // ваш пароль
  }
});

// Определите ф-ция для отправки е-маил сообщений
function sendEmail(to, subject, text) {
  const mailOptions = {
    from: 'mikhail.ivannikov2030@gmail.com', // ваш адрес электронной почты Gmail
    to: to,
    subject: subject,
    text: text
  };

// Отправьте е-маил
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email отправлен: ' + info.response);
    }
  });
};

module.exports = sendEmail;
