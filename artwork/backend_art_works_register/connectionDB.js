const mysql = require('mysql2');
const { Sequelize } = require('sequelize')


const sequelize = new Sequelize('sql10732878', 'avnadmin', ' ', {
    host: 'telematics-bd-telematics858.i.aivencloud.com',
    port: 23739,
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