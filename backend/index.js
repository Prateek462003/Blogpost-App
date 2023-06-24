const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const blogRoute = require("./Routes/Blog");
const cors  = require("cors");
dotenv.config();
const app = express();


const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected");
    }catch(err){
        console.log(err);
    }
}
app.use(cors());
app.use(express.json());
app.use("/api", blogRoute);

app.use((err, req, res, next)=>{
    const errStatus = err.status || 500;
    const errMessage = err.message || "Something went Wrong";
    return res.status(errStatus).json({
        success:false,
        status:errStatus,
        message:errMessage,
        stack:err.Stack
    });
});


app.listen(5000 || process.env.PORT, ()=>{
    connect();
    console.log("Backend Server Running");
});

