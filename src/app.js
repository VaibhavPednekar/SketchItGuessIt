const express = require('express');
const path = require('path')
const app = express()
const port = process.env.PORT || 8000;

const public_path = path.join(__dirname, "../public")
app.use(express.static(public_path));

app.get("/" , (req , res) =>{
    res.send("Welcome to vaibhav's  GRAND world")
})

app.get("/about" , (req , res) =>{
    res.send("welocme to vaibhav 's about world")
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