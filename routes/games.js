const express = require('express');
const router = express.Router();
const gamesCtrl = require('../controllers/games');
const isLoggedIn = require('../config/auth');

router.get('/', gamesCtrl.index);
// Use isLoggedIn middleware to protect routes
router.get('/new', isLoggedIn, gamesCtrl.new);
router.get('/:id', gamesCtrl.show);
router.post('/', isLoggedIn, gamesCtrl.create);

module.exports = router;
