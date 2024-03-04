const express = require('express')
const router = express.Router()
const exampleController = require("../controllers/exampleController");

// ==============================|| Routes - Index ||============================== //


router.get('/get-example', exampleController.getExample);

module.exports = router