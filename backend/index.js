import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use("/user", userRouter);

mongoose
    .connect(
        `mongodb+srv://ashishswami226:${process.env.MONGODB_PASSWORD}@cluster0.xizo0ds.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    )
    .then(() =>
        app.listen(5000, () =>
            console.log("connected to Database and server is running")
        )
    )
    .catch((e) => console.log(e));
