const router = require("express").Router();
const Publication = require('../controllers/publication');
const auth = require('../middleware/auth')

router.post("/", auth, Publication.createPublication)

router.delete("/:id", auth, Publication.deletePublication);
router.put('/:id', auth, Publication.modifyPublication);

router.get('/get', auth, Publication.getAllPublication);
router.get("/:id", auth, Publication.getPublication)
router.get('/get/user', auth, Publication.getAllPublicationUser);


module.exports = router;
