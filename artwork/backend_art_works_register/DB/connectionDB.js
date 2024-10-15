const { Sequelize } = require('sequelize')
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
})

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Conexión establecida");
    } catch (error) {
        console.error("Fallo la conexión: ", error);
    }
};

testConnection();

module.exports = sequelize; 