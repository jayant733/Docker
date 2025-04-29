const express = require("express")

const app = express()

app.get("/home", (req ,res)=>{
    res.json({
        message: "Welcome to the home page" 
    })
})
app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})