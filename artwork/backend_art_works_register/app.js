const express = require('express');
const app = express()
const historicalContext = require('./routes/historicalContextRoute');


app.use(express.json());

app.use('/api/historical', historicalContext);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})