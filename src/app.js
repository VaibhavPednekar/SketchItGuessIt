const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 8000;

//providing static path 
// const public_path = path.join(__dirname, "../public")
// app.use(express.static(public_path));

//using dynamic path
const template_path = path.join(__dirname , "../tempaltes/views")
app.set('view engine' , 'hbs');
app.set('views' , template_path);

app.get("/" , (req , res) =>{
    res.render("index")
})

app.get("/login" , (req , res) =>{
    res.render('login')
})
app.get("/contact" , (req , res) =>{
    res.send("Welcome to vaibhav's contact  world")
})

app.get("*" , (req , res) =>{
    res.send("Oops ! Page Not Found plzz type valid url. .. ")
})

app.listen(port , () =>{
    console.log(`listening at port ${port}`)
})