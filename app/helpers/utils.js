const email = require("../email")

exports.sendEmail = async (data) => {
    try {
        const emailData = JSON.parse(data);

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: emailData.email,
            subject: 'Email From Test App',
            text: emailData.msg
        };

        await email.sendEmail(mailOptions)
    } catch (e) {
        console.log("Error:", e);
    }
}