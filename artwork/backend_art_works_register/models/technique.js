const { DataTypes } = require('sequelize');
const sequelize = require('../DB/connectionDB');

function technique() {
    return sequelize.define('technique', {
        id_technique: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        technique_name: DataTypes.STRING,
        technique_description: DataTypes.STRING
    }, {
        tableName: 'technique',
        timestamps: false
    });
};

module.exports = technique();