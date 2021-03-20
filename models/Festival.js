const Sequelize = require('sequelize')
const db = require("../database/db.js")

const Festival = db.sequelize.define(
    'festival',
    {
        fes_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fes_date: {
            type: Sequelize.DATEONLY
        },
        fes_nbTables: {
            type: Sequelize.FLOAT
        }
    },
    {
        timestamps: false,
        tableName: 'festival',
        freezeTableName: true
    }
)


Festival.associate = (models) => {
    belongToMany(reservation, {foreignKey: 'fes_id'});
    belongToMany(models.role_festival, {foreignKey: 'fes_id'});
    belongToMany(models.suivi_exposant, {foreignKey: 'fes_id'});
}

module.exports = Festival;
