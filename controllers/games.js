const game = require('../models/game');
const Game = require('../models/game');

module.exports = {
  index,
  show,
  new: newGame,
  create,
  delete: deleteGame,
  edit
};

function index(req, res) {
  Game.find({}, function(err, games) {
    res.render('games/index', { title: 'All Games', games });
  });
}

function show(req, res) {
  Game.findById(req.params.id, function(err, game){
    res.render('games/show', { title: 'Game Detail', game });
  });
};

function newGame(req, res) {
  res.render('games/new', { title: 'Add Game' });
}

function create(req, res) {
  const game = new Game(req.body);
  game.save(function(err) {
    if (err) return res.redirect('/games/new');
    res.redirect(`/games/${game._id}`);
  });
}

// function deleteGame(req, res) {
//   Game.remove(req.params.id);
//   res.redirect('/games');
// }


function deleteGame(req, res) {
  Game.findOneAndDelete(
    {_id: req.params.id, userRecommending: req.user._id}, function(err) {
      res.redirect('/games');
    }
  );
}

function edit(req, res) {
  Game.findOne({_id: req.params.id, userRecommending: req.user._id}, function(err, game) {
    if (err || !game) return res.redirect('/games');
    res.render('games/edit', {game});
  });
}

// function edit(req, res) {
//   res.render('games/edit', {
//     game: Game.getOne(req.params.id)
//   })
// }