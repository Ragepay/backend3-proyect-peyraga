process.on("message", () => {
    // Logica del proceso.
    let result = 0;
    for (let i = 0; i <= 5e9; i++) {
        result += 1;
    }
    // Enviar resultados del proceso.
    process.send(result);
})