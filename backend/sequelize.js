// const Sequelize = require("sequelize");
// const { DataTypes, Op } = Sequelize;
// const db = require('./config/database')

// const User = require('./models/users')
// const Comment = require('./models/comment')
// const Publication = require('./models/publication')


// //connection à la database (database, log, pw {dialect, host ...})



// db.Sequelize = Sequelize


// db.authenticate().then(() => {
//   console.log("conntecté")
// }).catch((err) => {
//   console.log("marche pas")
// });





// // création de données
// // User.sync({ alter: true }).then((data) => {
// //   return User.create({
// //     username: "test6",
// //     password: "aaa",
// //     admin: true,
// //   });
// // });

// // Comment.sync({ alter: true }).then((data) => {
// //   return Comment.create({
// //     comment: "test de commentaire 1"
// //   });
// // });


// // Publication.sync({ alter: true }).then((data) => {
// //   return Publication.create({
// //     content: "test de publication"
// //   });
// // });