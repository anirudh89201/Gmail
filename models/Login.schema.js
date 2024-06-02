import mongoose from "mongoose";
const testSchema = new mongoose.Schema({
    email:String,
    password:String
})
export const  TestModel = mongoose.model("Users",testSchema);
