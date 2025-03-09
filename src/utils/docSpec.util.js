import swaggerJsDoc from "swagger-jsdoc";
import __dirname from "../../utils.js";

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Backend3-Proyect-Peyraga",
      description: "Documentation of Backend3-Proyect-Peyraga",
    },
    servers: [
      {
        url: "http://localhost:9000",
        description: "Servidor local"
      }
    ]
  },
  apis: [__dirname + "/src/docs/*.yaml"],
};

const docSpec = swaggerJsDoc(options);
export default docSpec;
