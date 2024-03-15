let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Aqui está a página de Fornecedores")
});

router.get('/produtos', function(req, res, next) {
    res.send("Aqui está a página de Produtos")
  });

  router.get('/promocoes', function(req, res, next) {
    res.send("Aqui está a página de Promoções")
  });

  router.get('/listagem', function(req, res, next) {
    res.send("Aqui está a página de Listagem")
  });

module.exports = router;