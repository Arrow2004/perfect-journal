const express = require("express")
const app = express();
const exphbs  = require('express-handlebars')
const path = require("path")
const dotenv = require("dotenv").config()
const connectDB = require("./config/db")();

app.use(express.json())
app.use(express.urlencoded({extended: false}))
//Set Static folder
app.use(express.static(path.join(process.cwd(),'public')))
app.get("/test",(req,res)=>{
    res.send("Serverda get so'rovlari ishlamoqda")
})


app.engine('.hbs',exphbs.engine({extname: '.hbs'}))
app.set('view engine','.hbs')
app.set('views', './views');
app.get("/",(req,res)=>{
    res.render("home",{
        title: "Perfect University science journal",
        url: process.env.URL
    })
})
app.use("/journals",require("./routes/journalRoutes"))
app.use("/add",require("./routes/addRoutes"))
app.listen(8080,()=>{
    console.log("Server is running")
})