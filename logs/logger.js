import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logDirectory = path.join(__dirname, "..", "logs");

// Si la carpeta no existe, la crea
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory, { recursive: true });
}

// Ruta del archivo de logs
const logFilePath = path.join(logDirectory, "access.log");

// Stream para Morgan
const accessLogStream = fs.createWriteStream(logFilePath, { flags: "a" });

export default accessLogStream;
