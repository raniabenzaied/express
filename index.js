const express = require('express');
const app = express();
const port = 3000;

const { AddDate } = require('./middelware/Date');

  app.use(express.static(__dirname +'/public'));
/*First Route home.html */
  app.get("/",AddDate,(req,res,next)=>{
    res.sendFile(__dirname+ "/public/home.html");
  });
/* Second Route services.html*/
  app.get("/services",AddDate,(req,res,next)=>{
    res.sendFile( __dirname +"/public/services.html");
  });
  /*third Route contact.html */
  app.get("/contact",AddDate,(req,res,next)=>{
    res.sendFile(__dirname+ "/public/contact.html");
  });
  


app.listen(port, (err) => {
  (err) ? console.log(err) : console.log(`Go to your localhost at port : ${port}`);
})