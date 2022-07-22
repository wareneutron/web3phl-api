// express
const express = require("express");
const router = express.Router();

// custom imports
const directoryController = require("../controllers/directoryController");

/* GET directory with search */
router.get("/", directoryController.directory_search);

module.exports = router;
