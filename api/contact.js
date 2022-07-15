
const dotenv = require('dotenv').config();
const nodemailer = require('nodemailer')

module.exports = async (req, res) => {

        if(req.method === 'GET'){
            // GET request
            res.send(`WE got VERCEL "GET" method asdasss `)
            console.log(process.env.TEST_ENV)

        } else if (req.method === 'POST'){
            // POST request
            console.log('hit 0.1')

            let fName = req.body.fName
            let lName = req.body.lName
            let subject = req.body.subject
            let message = req.body.message
            
            let email = `First Name: ${fName}<br/> 
            Last Name: ${lName} <br/>
            Subject: ${subject} <br/>
            Message: ${message}`
            
            var transporter = nodemailer.createTransport({
                host: 'smtp.office365.com',
                port: 587,
                secure: false,
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.EMAIL_PASSWORD
                }
            });

            console.log('hit 0.2')

            const mailOptions = {
                from: process.env.REQUEST_INFO_EMAIL,
                to: process.env.EMAIL,
                subject:subject,
                html: email
            }
            
            transporter.sendMail(mailOptions)
            console.log('hit 0.3')
            console.log('SUCCESS')

        } else {
            res.send('ERROR no method seen')
        }
    }
