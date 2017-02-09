/**
 * Created by jyothi on 9/2/17.
 */
import nodeMailer from 'nodemailer';

// create reusable transporter object using the default SMTP transport

export default (conf) => nodeMailer.createTransport({
    service: conf.service,
    auth: {
        user: conf.user,
        pass: conf.password
    }
});

/*
// setup email data with unicode symbols
let mailOptions = {
    from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
    to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});

module.exports = transporter;*/