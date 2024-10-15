const { DataTypes } = require('sequelize');
const sequelize = require('../DB/connectionDB');

const historicalContext = sequelize.define('historicalContext', {
    id_historical_context: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    context_name: DataTypes.STRING,
    description_context: DataTypes.STRING
}, {
    tableName: 'historical_context',
    timestamps: false
});
module.exports = historicalContext; 