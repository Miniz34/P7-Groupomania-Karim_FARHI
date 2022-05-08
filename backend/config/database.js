const { Sequelize } = require('sequelize');


const db = new Sequelize(process.env.MDB_DB, process.env.MDB_LOG, process.env.MDB_PW, {
  dialect: "mariadb",
  define: {
    freezeTableName: true,
  }
});

try {
  db.authenticate();
  console.log("conntecté")
} catch (error) {
  console.log("marche pas")
}


// db.authenticate().then(() => {
//   console.log("conntecté")
// }).catch((err) => {
//   console.log("marche pas")
// });

module.exports = db;