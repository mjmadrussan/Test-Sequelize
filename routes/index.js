var express = require('express');
var router = express.Router();
const db=require("../database/models")
const Op = db.Sequelize.Op;
/* GET home page. */
router.get('/', function(req, res) {
  db.Movie.findAll(
    {
      where: {
         awards: {
            [Op.gte]: 5
            }
      }
   }).then(resultado=> res.send(resultado))

});

module.exports = router;
