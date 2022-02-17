const { Router } = require("express");
const router = Router();

router.use(require("./products.route"));

module.exports = router;
