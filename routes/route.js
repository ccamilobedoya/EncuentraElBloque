var express = require('express');
var router = express.Router();


// Ruta de inicio
router.get('/', function(req, res) {
  res.render('index');
});


// Exporta todo lo relacionado a la variable router
module.exports = router;
