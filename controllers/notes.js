const Game = require('../models/game');

module.exports = {
  create,
  delete: deleteNote
};

function create(req, res) {
    Game.findById(req.params.id, function(err, game) {
      game.notes.push(req.body);
      game.save(function(err) {
        res.redirect(`/games/${game._id}`);
      });
    });
  }

async function deleteNote(req, res, next) {
    try {
        const game = await Game.findOne({ 'games._id': req.params.id, 'games.user': req.user._id })
        if(!game) return res.redirect('/games')
        game.notes.remove(req.params.id)
        await game.save()
        res.redirect(`/games/${game._id}`)
    } catch(err) {
        return next(err)
    }
}