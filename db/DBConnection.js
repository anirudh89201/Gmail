import dotenv from "dotenv";
import mongoose from "mongoose";
import { TestModel } from "../models/Login.schema.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Connected successfully"))
  .catch(error => console.error("Connection Error:", error));

export const WriteData = async (email, password) => {
    if(email.length > 0 && password.length > 0){
        try {
          const TestData = new TestModel({
            email,
            password
          });
          const doc = await TestData.save();
          console.log("Document Saved", doc);
        } catch (error) {
          console.error("Error Saving Document", error);
        }
    }
};
