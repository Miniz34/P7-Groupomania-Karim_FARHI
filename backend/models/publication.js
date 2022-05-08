const DataTypes = require('sequelize');
const db = require('../config/database');

const Publication = db.define('publication', {
  content: {
    type: DataTypes.TEXT,
  },
}, {
  freezeTableName: true,
})

module.exports = Publication