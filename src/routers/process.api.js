import CustomRouter from "../utils/CustomRouter.util.js";
//import { sum } from "../controllers/products.controller.js"

class ProcessApiRouter extends CustomRouter {
    constructor() {
        super(/*No necesito pasarle paramaetros a la clas de CustomRouter */);
        this.init();
    }

    init = () => { // Endpoints de products
        // GET | GET Process SUM.
        this.read("/sum", ["PUBLIC"], getSum);
    }
}

let processApiRouter = new ProcessApiRouter();
export default processApiRouter.getRouter();

function getSum(req, res) {

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
}