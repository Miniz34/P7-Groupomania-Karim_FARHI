const DataTypes = require('sequelize');
const db = require('../config/database');

const Comment = db.define('comment', {
  commentaire: {
    type: DataTypes.TEXT,
  },
}, {
  freezeTableName: true,
})

module.exports = Comment;
