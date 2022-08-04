const nodemailer = require("nodemailer");

let transporter = null;

exports.init = () => {
    transporter = nodemailer.createTransport({
        host: 'smtp.mail.ru',
        port: 465,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });
}

exports.sendEmail = async (mailOptions) => {
    return transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}