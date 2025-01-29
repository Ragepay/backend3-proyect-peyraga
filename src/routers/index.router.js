import { Router } from "express";
import apiProductsRouter from "./products.router.js";
import { fork } from "child_process";

const apiIndex = Router();

apiIndex.use("/products", apiProductsRouter);
//apiIndex.use("/sessions", apiProductsRouter);
//apiIndex.use("/carts", apiProductsRouter);
//apiIndex.use("/users", apiProductsRouter);

apiIndex.get("/sum", (req, res, next) => {
    try {
        // Empezar a medir el tiempo de ejecución
        let inicio = performance.now();

        // Inicializar el proceso hijo
        const childProcess = fork("./src/process/sum.process.js");

        // Enviar mensaje al proceso hijo para comenzar el cálculo
        childProcess.send("start");

        // Manejar el resultado del proceso hijo
        childProcess.on("message", (message) => {
            const result = message;

            // Medir el tiempo después de recibir el resultado
            let fin = performance.now();
            let time = (fin - inicio) / 1000;  // Convertir a segundos

            // Responder al cliente con el resultado y el tiempo
            return res.status(200).json({ result, time });

            // Opcional: cerrar el proceso hijo si ya no es necesario
            childProcess.kill();
        });

        // Manejar errores en el proceso hijo
        childProcess.on("error", (error) => {
            return res.status(500).json({ error: "Error en el proceso hijo", details: error });
        });

    } catch (error) {
        return res.status(500).json({ error });
    }
});


export default apiIndex;