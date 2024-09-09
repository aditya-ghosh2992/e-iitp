import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  rollno: {
    type: String,
    required: true,
    unique: true,
  },
  contactno: {
    type: String,
    required: true,
  },
  coursecategory: {
    type: String,
    required: true,
  },
  coursename: {
    type: String,
    required: true,
  },
  admissionyear: {
    type: Number, 
    required: true,
  },
  interesteddomain: {
    type: String,
    required: true,
  },
  other: {
    type: String,
    
  },
}, { timestamps: true,versionKey:false });

const User = mongoose.model("User", userSchema);

export default User;
