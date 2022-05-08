const bcrypt = require("bcrypt");
const Sequelize = require("sequelize");
const { DataTypes, Op } = Sequelize;
const User = require('../models/users')
const jwt = require('jsonwebtoken');
const { json } = require("sequelize");


//Contrôleur création de compte
exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10) //On utilise Bcrypt pour le mot de passe, l'algorithme fera 10 tours
    .then(hash => {
      const newUser = User.create({ //création de l'utilisateur
        username: req.body.username,  //on passe l'email crypté via crypto-JS
        password: hash, // on passe le mot de passe hashé via Bcrypt
        admin: req.body.admin
      })
        .then(newUser => res.status(201).json({ message: "Utilisateur créé" }))
      // .catch(error => res.status(400).json({ hash }));
      console.log(newUser);

    })
    .catch(error => res.status(500).json({ message: "erreur2" }));


};


//Contrôleur connexion à un compte existant
exports.login = (req, res, next) => {
  User.findOne({ where: { username: req.body.username } }) //On cherche l'utilisateur dans la base de données cryptée
    .then(myUser => {
      if (!myUser) { return res.status(401).json({ error: 'Utilisateur non trouvé.' }); }
      bcrypt.compare(req.body.password, myUser.password) //On compare le PW pour vérifier qu'ils ont les mêmes string d'origine
        .then(valid => {
          if (!valid) { return res.status(401).json({ error: 'Mot de passe incorrect.' }); } //Si les mots de passe ne concordent pas, on renvoit une erreur
          const newToken = jwt.sign({ userId: myUser.id, admin: myUser.admin }, process.env.TOKEN_KEY, { expiresIn: '24h' }); //Création d'un token d'authentification
          res.setHeader('Authorization', 'Bearer ' + newToken);
          res.status(200).json({
            userID: myUser.username,
            newToken
          });

        })
        .catch(error => res.status(500).json({ message: "Mot de passe incorrect" }));
    })
    .catch(error => res.status(500).json({ message: "Utilisateur non trouvé" }));
};


exports.getOneUser = (req, res, next) => {
  User.findOne({
    attributes: ['id', 'username', 'admin'],
    where: { username: req.body.username }
  })
    .then((data) => {
      res.status(200).json({ data })
    })
}


//Contrôleur de suppression de compte


module.exports.getusers = (req, res) => {
  User.findAll({
    attributes: ['id', 'username', 'admin']
  }).then((data) => {
    res.status(200).json({ data })
  })
    .catch((err) => {
      console.log("erreur");
    })
}


// Delete User 1.0
// exports.deleteUser = (req, res, next) => {
//   User.findOne({ where: { username: req.body.username } })
//     .then(user => {
//       bcrypt.compare(req.body.password, user.password)
//         .then(valid => {
//           if (valid && (user.admin == true || user.id == req.token.userId)) {
//             User.destroy({ where: { username: user.username } })
//             res.status(200).json({ message: "Utilisateur supprimé" })
//           }
//           else {
//             res.status(401).json({ message: "unauthorized" })
//           }
//         })
//     }).catch(error => res.status(500).json({ message: "Utilisateur non trouvé" }))
// }


// Delete User 2.0 avec vérification du token et status admin
exports.deleteUser = (req, res, next) => {
  User.findOne({
    attributes: ['id', 'username', 'admin'],
    where: { id: req.params.id }
  })
    .then(user => {
      if (user.admin == true || user.id == req.token.userId) {
        User.destroy({ where: { id: user.id } })
        res.status(200).json({ message: "Utilisateur supprimé" })
      } else {
        res.status(401).json({ message: "unauthorized" })
      }
    })
}



///Ajout de vérification du token et status admin
exports.modifyUser = (req, res, next) => {
  User.findOne({
    attributes: ['id', 'username', 'admin'],
    where: { id: req.params.id }
  }).then(user => {

    if (user.admin == true || user.id == req.token.userId) {
      User.update({
        username: req.body.username,
        password: req.body.password
      },

        { where: { id: user.id } }

      ).then(res.status(200).json({ message: "Utilisateur modifié" }))
    } else {
      res.status(401).json({ message: "unauthorized" })
    }
  })     //.catch(error => res.status(500).json({ message: "Utilisateur non trouvé" }));
}


////////////////////////////////////
//////Recherche des admins//////////
////////////////////////////////////

// exports.findAdmin = (req, res, next) => {
//   User.findAll({
//     where: { admin: 1 }
//   }).then(user => res.status(200).json(user))
// }


// var isAdmin =
//   User.findAll({
//     attributes: ['id', 'username', 'admin'],
//     where: { admin: 1 }
//   }).then((admin) => {
//     isAdmin = admin;
//     isAdmin.forEach((element) => {
//       console.log(element.toJSON());
//       console.log(element.id)
//     });
//   }).catch((err) => {
//     console.log("erreur");
//   })


