import express from "express";
import morgan from "morgan";
import indexRouter from "./src/routers/index.router.js";
import envUtil from "./src/utils/env.util.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import compression from "express-compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";
import cluster from "cluster";
import { cpus } from "os";
import loggerUtil from "./src/utils/logger.util.js";


const { PORT, MODE } = envUtil;

const app = express();

/*
// Servidor simple.
// Listen
app.listen(PORT, ready);
*/

// Servidor con Clusterizacion
if (cluster.isPrimary) {
    for (let index = 1; index <= cpus().length; index++) {
        cluster.fork();
    }
    cluster.on('exit', (worker) => {
        loggerUtil.INFO(`Worker ${worker.process.pid} murió, creando otro...`);
        cluster.fork();
    });
} else {
    // Listen
    app.listen(PORT, ready);
}

// Funcion de ejecucion del servidor.
async function ready() {
    loggerUtil.INFO(`MODE: ${MODE} | PORT: ${PORT}`);
}

// Middlewares
app.use(compression());// Compression con gzip, standar // Con brotli es mas comprimido pero consume mas recursos del servidor { brotli: { enabled: true, zlib: {} } }
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(cookieParser(envUtil.SECRET_KEY));
// Cors para compartir recursos de origenes crusados.
app.use(
    cors({
        // origin:true, esta abierto a todo el publico. Para que sea solo para el front desplegado, pegar la base del Uri en string.
        origin: true,
        //origin: envUtil.BASE_URL,
        // Permite el cruce de cookies.
        credentials: true
    })
);

/*
// Configuracion de session con Mongo Storage.
app.use(session({
    secret: envUtil.SECRET_KEY,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongoUrl: envUtil.MONGO_LINK, ttl: 60 * 60 * 24 }), // Default 14 dias.
}));
*/

// Rutas
app.use("/api", indexRouter);

// Middleware de manejo de errores.
app.use(errorHandler);
app.use(pathHandler); // Debe ser el ultimo, porque recibe rutas no existentes.
