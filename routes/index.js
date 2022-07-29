const router = require("express").Router();
const Controller = require("../controllers");

router.get('/', Controller.findGraph)
router.post('/', Controller.createGraph)

module.exports = router;
