const mongoose = require("mongoose")

const connectDB  = async ()=>{ mongoose.connect(process.env.MONGO_URI,{
}).then(res=>{
    console.log("Database connected.")
}).catch(err=>{
    console.log(err)
})}
module.exports = connectDB