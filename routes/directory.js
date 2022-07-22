// express
var express = require("express");
var router = express.Router();

// custom imports
var directoryController = require("../controllers/directoryController");

/* GET directory with search */
router.get("/", directoryController.directory_search);

module.exports = router;
