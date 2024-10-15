const sequelize = require('./connectionDB')
const historicalContext = require('../models/historicalContext');
const technique = require('../models/technique');

const result_query = async () => {
    const result = await sequelize.query("SELECT * FROM artwork");
    console.log("Resultado:", result);
};


const insertHistoricalContext = async (data) => {
    await historicalContext.create({
        context_name: data.context_name,
        description_context: data.description_context
    });
};

const insertTechnique = async (data) => {
    console.log(data);
    await technique.create({
        technique_name: data.technique_name,
        technique_description: data.technique_description
    });
};


module.exports = {
    insertHistoricalContext,
    result_query,
    insertTechnique
};


