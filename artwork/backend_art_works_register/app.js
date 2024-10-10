const express = require('express');
const app = express()
const querys = require('./querys')


app.get('/', (req, res) => {
    res.send('Hola universo!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})