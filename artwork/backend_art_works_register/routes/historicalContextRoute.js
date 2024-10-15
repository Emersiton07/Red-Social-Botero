const express = require('express');
const router = express.Router();
const { insertHistoricalContext } = require('../DB/querys')

const insertHistoricalContextRoute = async (req, res) => {
    try {
        console.log(req.body);
        const data = req.body;
        console.log(data);
        await insertHistoricalContext(data);
        res.status(201).send("Datos insertados correctamente.");
    } catch (error) {
        res.status(500).send("Error al insertar datos: " + error.message);
    }
};

router.post('/addhistoricalcontext', insertHistoricalContextRoute);

module.exports = router;