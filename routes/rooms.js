var express = require('express');
var router = express.Router();


// Se ejecuta siempre que se accede a la ruta /rooms
// No le importa ni el metodo ni el resto de la url
router.use(function(req, res, next) {
  console.log('Se accedio a la api del RS\n' +
    'Se dirige a: '+ req.url + '\nMetodo: ' + req.method);
  // Siga con las rutas normalmente
  next();
});


router.get('/:room/:user', function(req, res) {
  res.render('roomView', {id: req.params.room, user: req.params.user});
});

// Exporta todo lo relacionado a la variable router
module.exports = router;
