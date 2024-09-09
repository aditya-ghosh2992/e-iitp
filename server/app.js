import express from "express"
import cookieParser from "cookie-parser"
import dotenv from "dotenv";
import connectDb from "./config/database.js"
import router from "./routes/user.js"
import cors from "cors"
const app = express();
dotenv.config();
connectDb();
app.use(cors({
    origin:"http://localhost:5173",
}))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.get("/",(req,res)=>{
res.send("<h1>Server is Working</h1>");
})
app.use("/api/v1",router);
export default app;