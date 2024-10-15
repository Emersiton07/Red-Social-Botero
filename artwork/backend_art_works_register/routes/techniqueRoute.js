const express = require('express');
const router = express.Router();
const { insertTechnique } = require('../DB/querys')

const insertTechniqueRoute = async (req, res) => {
    try {
        const data = req.body;
        await insertTechnique(data);
        res.status(201).send("Todo fino");
    } catch (error) {
        res.status(500).send("Fallo: " + error.message);
    }
};

router.post('/addtechnique', insertTechniqueRoute);

module.exports = router;
