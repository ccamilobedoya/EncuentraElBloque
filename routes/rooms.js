var express = require('express');
var router = express.Router();


// Se ejecuta siempre que se accede a la ruta /rooms
// No le importa ni el metodo ni el resto de la url
router.use(function(req, res, next) {
  console.log('Se accedio a /rooms');
  // Siga con las rutas normalmente
  next();
});


router.get('/:room/:user', function(req, res) {
  res.cookie('room', req.params.room);
  res.cookie('user', req.params.user);
  res.render('roomPlayerView', {id: req.params.room, user: req.params.user});
});

router.get('/:room', function(req, res) {
  res.cookie('room', req.params.room);
  res.render('roomView', {id: req.params.room});
});

// Exporta todo lo relacionado a la variable router
module.exports = router;
