const express = require('express');
const router = express.Router();

const notesCtrl = require('../controllers/notes')

// You Do - Define the Route below
router.post('/games/:id/notes', notesCtrl.create)
router.delete('/notes/:id', notesCtrl.delete)


module.exports = router;
