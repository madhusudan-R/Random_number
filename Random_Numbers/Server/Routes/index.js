const express = require('express');
const router = express.Router();

const playerController = require("../Controllers/players");
const numberController = require("../Controllers/number");

router.post('/players', playerController.savePlayers);
//router.post('/players', playerController.randomNumber);
router.get('/randomNumbers', numberController.randomNumber);
//router.get('/getRandomNumbers', numberController.getNumbers)

module.exports = router;