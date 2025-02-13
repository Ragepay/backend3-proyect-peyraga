import multiplicar from "./operaciones/multiplicar.js";
import restar from "./operaciones/restar.js";
import sumar from "./operaciones/sumar.js";
import dividir from "./operaciones/dividir.js";
//const dividir = (n1, n2) => n1 / n2;

const module = { sumar, restar, multiplicar, dividir }
export { sumar, restar, multiplicar, dividir }
export default module; 