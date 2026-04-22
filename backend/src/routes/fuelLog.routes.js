const router = require("express").Router();
const c = require("../controllers/fuel.controller");
const auth = require("../middleware/auth");

router.post("/",auth,c.create);
router.get("/",auth,c.getAll);
router.get("/pending",auth,c.pending);
router.patch("/:id/confirm",auth,c.confirm);

module.exports = router;