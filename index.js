import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import donarRoute from "./routes/donar.js"
import campRoute from "./routes/camp.js"
import ngosRoute from "./routes/ngo.js";
import authRoute from "./routes/auth.js";


//App config
const app = express();
dotenv.config();


//DB config
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to Mongodb");
    } catch (error) {
        throw error;
        console.log(error)
    }
};

// middleware
app.set("view engine", "ejs");
app.use(express.json());
app.use(cors());
app.use("/api/donar", donarRoute);
app.use("/api/camp", campRoute);
app.use("/api/ngo", ngosRoute);
app.use("/api/auth", authRoute);
app.use("/", (req, res) => {
    res.status(200).json("Hello from first page...")
})



app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "something else"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});


// App listern
app.listen(process.env.PORT, () => {
    connect();
    console.log("connected to backend");
});
