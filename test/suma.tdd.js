import loggerUtil from "../src/utils/logger.util.js";
// Metodo TDD

const suma = (...numbers) => {
    if (numbers.length === 0) {
        return 0;
    }
    const some = numbers.some((num) => typeof num !== "number");
    if (some) {
        return null;
    }
    const sum = numbers.reduce((acc, val) => acc + val);
    return sum;
}
let contadorPruebas = 0;
let contadorPruebasOk = 0;

/* T1: Devuelve null si algun paramentro no es numerico */
function test1() {
    contadorPruebas++
    const resultado = suma("hola", "Chau");
    if (resultado === null) {
        contadorPruebasOk++
        loggerUtil.INFO("TEST 1: OK.");
    } else {
        loggerUtil.WARN("TEST 1: NG.");
    }
}

/* T2: Devuelve 0 si no recibe argumentos */
function test2() {
    contadorPruebas++
    const resultado = suma();
    if (resultado === 0) {
        contadorPruebasOk++
        loggerUtil.INFO("TEST 2: OK.");
    } else {
        loggerUtil.WARN("TEST 2: NG (Devuelve 0 si no recibe argumentos)");
    }
}

/* T3: Devuelve correctamente la suma de 2 numeros. */
function test3() {
    contadorPruebas++
    const resultado = suma(2, 12);
    if (resultado === 14) {
        contadorPruebasOk++
        loggerUtil.INFO("TEST 3: OK.");
    } else {
        loggerUtil.WARN("TEST 3: NG ( no devuelve correctamente la suma de 2 numeros)");
    }
}

/* T4: Devuelve correctamente la suma de muchos numeros. */

function test4() {
    contadorPruebas++
    const resultado = suma(10, 10, 10, 10, 10);
    if (resultado === 50) {
        contadorPruebasOk++
        loggerUtil.INFO("TEST 4: OK.");
    } else {
        loggerUtil.WARN("TEST 4: NG ( no devuelve correctamente la suma de todos los numeros)");
    }
}

test1();
test2();
test3();
test4();
loggerUtil.INFO({ contadorPruebas, contadorPruebasOk })


