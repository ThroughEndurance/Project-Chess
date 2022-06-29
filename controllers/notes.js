const Game = require('../models/game');

module.exports = {
  create,
  delete: deleteNote
};

function create(req, res) {
    Game.findById(req.params.id, function(err, game) {
      // We can push subdocs into Mongoose arrays
      game.notes.push(req.body);
      // Save any changes made to the movie doc
      game.save(function(err) {
        // Step 5:  Respond to the Request (redirect if data has been changed)
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