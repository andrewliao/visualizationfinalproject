const express = require("express");
let nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user : 'blockchain3966@gmail.com',
        pass: '396block!!'      
    }
})


const app = express();

app.use(express.static("C:/cs396/project/prj/public"));

app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile('C:/cs396/project/prj/public/editor.html');
})

app.post('/submit', (req, res) => {
  let mailOptions = {
    from: 'blockchain3966@gmail.com',
    to : `${req.body.user.email}`,
    subject: '396 Blockchain Project',
    text: `Hello dear user! Here's the data you requested: ${req.body.data}`
          
  };
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }
    else{
        console.log(req.body);
        console.log("sent")
        
    }
    
  })
  res.redirect('/editor.html')

});

app.listen(3000, function() {
  console.log("Running on port 3000.");
});


