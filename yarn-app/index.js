import express from "express";

const app = express();

const PORT = 8001;

const ready = () => {
    console.log(`Server ready on port: ${PORT}`)
};

app.listen(PORT, ready);