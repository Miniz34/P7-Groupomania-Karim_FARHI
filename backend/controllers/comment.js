const Sequelize = require("sequelize");
const { DataTypes, Op } = Sequelize;
const Comment = require('../models/comment')

exports.createComment = (req, res, next) => {
  Comment.create({
    commentaire: req.body.commentaire
  })
    .then(res.status(200).json({ message: "Commentaire créée" }))
  // .catch(res.status(500).json({ message: "Veuillez insérer un message" })) //Ne fonctionne pas
}

exports.getComment = (req, res, next) => {
  Comment.findOne({
    where: { id: req.params.id }

  }).then(comment => {
    res.status(200).json(comment)
  }).catch((error) => res.status(404).json({ message: "Commentaire introuvable" })); //Ne fonctionne pas

}

exports.deleteComment = (req, res, next) => {
  Comment.findOne({
    where: { id: req.params.id }
  }).then(post => {
    Comment.destroy({
      where: { id: post.id }

    }).then(res.status(200).json({ message: "Commentaire supprimée" }))
  })
}

exports.modifyComment = (req, res, next) => {
  Comment.findOne({
    where: { id: req.params.id }
  }).then(post => {
    Comment.update({
      commentaire: req.body.commentaire
    },
      {
        where: { id: post.id }

      }).then(res.status(200).json({ message: "Commentaire modifiée" }))
  })     //.catch(error => res.status(500).json({ message: "Utilisateur non trouvé" }));
}