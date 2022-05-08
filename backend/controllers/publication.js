const Sequelize = require("sequelize");
const { DataTypes, Op } = Sequelize;
const Publication = require('../models/publication')
const User = require('../models/users');
const { post } = require("../routes/comment");




exports.createPublication = (req, res, next) => {
  Publication.create({
    content: req.body.content
  })
    .then(res.status(200).json({ message: "Publication créée" }))
  // .catch(res.status(500).json({ message: "Veuillez insérer un message" })) //Ne fonctionne pas
}

exports.getPublication = (req, res, next) => {
  Publication.findOne({
    where: { id: req.params.id }

  }).then(post => {
    res.status(200).json(post)
    let test = post.userId
    console.log(test);
  }).catch((error) => res.status(404).json({ message: "Publication introuvable" })); //Ne fonctionne pas


}

exports.getAllPublication = (req, res, next) => {
  Publication.findAll()
    .then(post => {
      res.status(200).json(post)
    }).catch((error) => res.status(400).json({ message: "test" }))
}



///Premier test association
exports.getAllPublicationUser = (req, res, next) => {
  Publication.findAll({
    attributes: ["content", "userId"],
    where: { userId: 18 }
  })
    .then(post => {
      res.status(200).json(post)
      post.forEach((element) => {
        let userid = element.userId
        console.log(userid)
        User.findOne({
          attributes: ["username"],
          where: { id: userid }
        }).then(user => {
          let username = user.username
          console.log(username)
        })
      })

    })


}
//  const test = post
//  console.log(test)



// .catch((error) => res.status(400).json({ message: "test" }))



//Delete post 1.0
exports.deletePublication = (req, res, next) => {
  Publication.findOne({
    where: { id: req.params.id }
  }).then(post => {
    Publication.destroy({
      where: { id: post.id }

    }).then(res.status(200).json({ message: "Publication supprimée" }))
  })
}



//Delete post 2.0 : à revoir avec le front
exports.deletePublicationDeux = (req, res, next) => {
  User.findOne({
    attributes: ['id', 'username', 'admin'],
    where: { id: req.params.id }
  })
    .then(user => {
      if (user.id == req.token.userId) {
        Publication.findOne({ where: { id: post.id } })
        res.status(200).json({ message: "Utilisateur supprimé" })
          .then((publication) => {
            Publication.destroy({
              where: { id: publication.id }
            }).then(() => res.end)
              .catch(err => res.status(500).json(err))
          }
          )
      } else {
        res.status(401).json({ message: "unauthorized" })
      }
    })
}

exports.modifyPublication = (req, res, next) => {
  Publication.findOne({
    where: { id: req.params.id }
  }).then(post => {
    Publication.update({
      content: req.body.content
    },
      {
        where: { id: post.id }

      }).then(res.status(200).json({ message: "Publication modifiée" }))
  })     //.catch(error => res.status(500).json({ message: "Utilisateur non trouvé" }));
}