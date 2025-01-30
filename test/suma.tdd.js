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
        console.log("TEST 1: OK.");
    } else {
        console.log("TEST 1: NG.");
    }
}

/* T2: Devuelve 0 si no recibe argumentos */
function test2() {
    contadorPruebas++
    const resultado = suma();
    if (resultado === 0) {
        contadorPruebasOk++
        console.log("TEST 2: OK.");
    } else {
        console.log("TEST 2: NG (Devuelve 0 si no recibe argumentos)");
    }
}

/* T3: Devuelve correctamente la suma de 2 numeros. */
function test3() {
    contadorPruebas++
    const resultado = suma(2, 12);
    if (resultado === 14) {
        contadorPruebasOk++
        console.log("TEST 3: OK.");
    } else {
        console.log("TEST 3: NG ( no devuelve correctamente la suma de 2 numeros)");
    }
}

/* T4: Devuelve correctamente la suma de muchos numeros. */

function test4() {
    contadorPruebas++
    const resultado = suma(10, 10, 10, 10, 10);
    if (resultado === 50) {
        contadorPruebasOk++
        console.log("TEST 4: OK.");
    } else {
        console.log("TEST 4: NG ( no devuelve correctamente la suma de todos los numeros)");
    }
}

test1();
test2();
test3();
test4();
console.log({ contadorPruebas, contadorPruebasOk })



/*
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
};
*/

/*

// T1: devuelve null si algun parametro no es numerico 
function test1() {
    contadorPruebas++;
    const resultado = suma("hola", "chau");
    if (resultado === null) {
        contadorPruebasOk++;
        console.log("TEST 1: OK");
    } else {
        console.log(
            "TEST 1: FALLÓ (devuelve null si algun parametro no es numerico)"
        );
    }
}


// T2: devuelve 0 si no recibe argumentos 
function test2() {
    contadorPruebas++;
    const resultado = suma();
    if (resultado === 0) {
        contadorPruebasOk++;
        console.log("TEST 2: OK");
    } else {
        console.log("TEST 2: FALLÓ (devuelve 0 si no recibe argumentos)");
    }
}


// T3: devuelve correctamente la suma de dos numeros 
function test3() {
    contadorPruebas++;
    const resultado = suma(2, 12);
    if (resultado === 14) {
        contadorPruebasOk++;
        console.log("TEST 3: OK");
    } else {
        console.log(
            "TEST 3: FALLÓ (devuelve correctamente la suma de dos numeros)"
        );
    }
}


// T4: devuelve correctamente la suma de cualquier cantidad de numeros 
function test4() {
    contadorPruebas++;
    const resultado = suma(10, 10, 10, 10, 10);
    if (resultado === 50) {
        contadorPruebasOk++;
        console.log("TEST 4: OK");
    } else {
        console.log(
            "TEST 4: FALLÓ (devuelve correctamente la suma de cualquier cantidad de numeros)"
        );
    }
}

*/