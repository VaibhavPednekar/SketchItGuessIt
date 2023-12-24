const express = require('express');
const app = express()
const port = process.env.PORT || 8000;

app.get("/" , (req , res) =>{
    res.send("Welcome to vaibhav's  GRAND world")
})

app.listen(port , () =>{
    console.log(`listening at port ${port}`)
})