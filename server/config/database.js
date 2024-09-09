import mongoose from "mongoose";

const connectDb = ()=>{
    mongoose.connect(`${process.env.MONGODB_URI}`,{
        dbName:"users"
    }).then(()=>{
        console.log("DataBase Connected");
    }).catch((e)=>{console.log(e);})
}
export default connectDb;