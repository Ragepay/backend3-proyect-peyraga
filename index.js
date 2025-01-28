import express from "express";
import morgan from "morgan";
import envUtil from "./src/utils/env.util.js";
import dbConnect from "./src/utils/dbConnect.util.js";
import apiIndex from "./src/routers/index.router.js";

const app = express();
const { PORT } = envUtil;
const ready = async () => {
    console.log("Server redy on port: " + PORT);
    await dbConnect();
}


// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

// Rutas
app.use("/api", apiIndex);

// Listen
app.listen(PORT, ready);