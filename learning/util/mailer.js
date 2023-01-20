const mailer = require('nodemailer');

const sendMail = (to)=>{

    const transporter = mailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth:{
            user:"samir.royal4all@gmail.com",
            pass:"psuiojqvjwdhjrge"
        }
    })

    const options = {
        from: 'samir.royal4all@gmail.com',
        to: to,
        subject: 'Test Mail',
        html: '<h1>Hello from Samir</h1>',
        attachments: [
            {
                filename: 'samir.png',
                path:'C:\\Users\\Samir\\Desktop\\Samir Vithlani.png',
                cid: 'uniq-mailtrap.png'
            }
        ]

    }

    transporter.sendMail(options,(err,info)=>{
        if(err){
            console.log(err);
        }else{
            console.log(info);
        }
    })



}
module.exports = {sendMail};