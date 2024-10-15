const express = require('express');
const app = express()
const historicalContext = require('./routes/historicalContextRoute');
const technique = require('./routes/techniqueRoute');


app.use(express.json());

app.use('/api/historical', historicalContext);
app.use('/technique', technique);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})