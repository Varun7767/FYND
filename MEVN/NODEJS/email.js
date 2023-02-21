var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rajeshirkevarun@gmail.com',
        pass: '9766337761'
    }
});

var mailOptions = {
    from: 'rajeshirkevarun@gmail.com',
    to: '1903005@ritindia.edu',
    subject: 'Sending Email using NOde.js',
    text: 'Test was easy!'
};

transporter.sendMail(mailOptions,function(error, info){
    if(error) {
        console.log(error);
    } else {
        console.log('Email Sent: '+ info.response)
    }
});