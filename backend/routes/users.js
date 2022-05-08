const router = require("express").Router();
const User = require('../controllers/users');
const auth = require('../middleware/auth')

router.post("/auth", auth, User.signup);
router.post("/login", User.login);

router.get("/get", auth, User.getusers);
router.get("/get/:id", auth, User.getOneUser);

router.put("/:id", auth, User.modifyUser);
router.delete("/:id", auth, User.deleteUser);
// router.get("/get/admin", User.findAdmin)


module.exports = router;
