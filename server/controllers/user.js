import User from "../models/user.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js"
const verifyemail = async(req,res)=>{
  try {
  const { email } = req.body;
  if(!email){
    return res.status(400).json(new ApiResponse(false,"Email Id is Required"));
  }
  const user = await User.findOne({email:email});
  const suffix = "@iitp.ac.in";
  if(!email.endsWith(suffix)){
    return res.status(400).json(new ApiResponse(false,"Invalid Email Id"));
  }
  if(user){
    return res.status(409).json(new ApiResponse(false,"User Already Exists"));
  }
  res.status(200).json(new ApiResponse(true,"Valid Email Id"));

  } catch (error) {
    res.status(500).json(new ApiError(false,error.message));
  }
}
const registerUser = async (req, res) => {
  try {
    const {email,fullname,rollno,contactno,coursecategory,coursename,admissionyear,interesteddomain,other} = req.body;
    const suffix = "@iitp.ac.in";
    if(!email.endsWith(suffix)){
      return res.status(400).json(new ApiResponse(false,"Invalid Email Id"));
    }
    const user = await User.findOne({ $or: [{ email }, { rollno }] });
    if (user) {
      return res.status(409).json(new ApiResponse(false,"User Already Exists"));
    }
    const newUser = await User.create({
      email,
      fullname,
      rollno,
      contactno,
      coursecategory,
      coursename,
      admissionyear,
      interesteddomain,
      other,
    });

    res.status(201).json(new ApiResponse(true,"Registered Successfully"));
  } catch (error) {
    res.status(500).json(new ApiError(false,error.message));
  }
};

export { registerUser,verifyemail };
