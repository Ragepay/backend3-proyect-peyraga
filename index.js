import express from "express";
import morgan from "morgan";
import dbConnect from "./src/utils/dbConnect.util.js";
import apiIndex from "./src/routers/index.router.js";
import envUtil from "./src/utils/env.util.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import cluster from "cluster";
import { cpus } from "os";

const { PORT, MODE } = envUtil;

const app = express();


// Servidor simple.
// Listen
app.listen(PORT, ready);


/*
// Servidor con Clusterizacion
if (cluster.isPrimary) {
    for (let index = 1; index <= cpus().length; index++) {
        cluster.fork();
    }
    cluster.on('exit', (worker) => {
        console.log(`Worker ${worker.process.pid} murió, creando otro...`);
        cluster.fork();
    });
} else {
    // Listen
    app.listen(PORT, ready);
}
*/
async function ready() {
    console.log("MODE: " + MODE);
    console.log("Server redy on PORT: " + PORT);
    await dbConnect();
}

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

// Rutas
app.use("/api", apiIndex);

// Middleware de manejo de errores.
app.use(errorHandler);
app.use(pathHandler); // Debe ser el ultimo, porque recibe rutas no existentes.
