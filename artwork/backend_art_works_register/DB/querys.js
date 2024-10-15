const sequelize = require('./connectionDB')
const historicalContext = require('../models/historicalContext');

const result_query = async () => {
    const result = await sequelize.query("SELECT * FROM artwork");
    console.log("Resultado:", result);
};


const insertHistoricalContext = async (data) => {
    await historicalContext.create({
        context_name: data.context_name,
        description_context: data.description_context
    });
}


module.exports = {
    insertHistoricalContext,
    result_query
};


