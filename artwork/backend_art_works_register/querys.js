const sequelize = require('./connectionDB')


const result_query = async () => {
    const result = await sequelize.query("SELECT * FROM artwork");
    console.log("Resultado:", result);
};

result_query();


