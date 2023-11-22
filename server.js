const express = require("express")
const app = express();
const exphbs  = require('express-handlebars')
const Handlebars = require('handlebars')
const path = require("path");
const hbsHelpers = require("./utils/helpers");
const dotenv = require("dotenv").config()
const connectDB = require("./config/db")();
const session = require('express-session')
const MongoStore = require('connect-mongo');
const flash = require('connect-flash')




app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({mongoUrl: process.env.MONGO_URI})
}))
app.use(flash())
//Set Static folder
app.use(express.static(path.join(process.cwd(),'public')))


app.engine('.hbs',exphbs.engine({extname: '.hbs'}))
app.set('view engine','.hbs')
app.set('views',path.join(__dirname,'/views'))

hbsHelpers(Handlebars)

app.get("/",(req,res)=>{
    res.render("home",{
        title: "Perfect University science journal",
        url: process.env.URL
    })
})
app.get("/test",(req,res)=>{
    res.render("test",{
        title: "test",
        url: process.env.URL
    })
})
app.use("/journals",require("./routes/journalRoutes"))
app.use("/add",require("./routes/addRoutes"))
app.use("/auth",require("./routes/authRoutes"))

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("Server is running on port: "+PORT)
})
module.exports = app