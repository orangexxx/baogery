'use strict';
var express = require('express');
var router = express.Router();
var Cupboard = require('../src/budget/cupboard');
var Wardrobe = require('../src/budget/wardrobe');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('budget/index');
});

router.post('/', function(req, res, next) {
  let resultObj = null;
  if (req.body.type === 'cupboard') {
    resultObj = new Cupboard({
      upLen: parseFloat(req.body.chuUpLen) || 0,
      downLen: parseFloat(req.body.chuDownLen) || 0,
      bodyType: req.body.chuBodyType,
      stoneType: req.body.chuStoneType,
      doorType: req.body.chuDoorType
    });
  } else if (req.body.type === 'wardrobe') {
  	resultObj = new Wardrobe({
      width: parseFloat(req.body.yiWidth) || 0,
      height: parseFloat(req.body.yiHeight) || 0,
      param: parseFloat(req.body.yiParam) || 3.2,
      bodyType: req.body.yiBodyType,
      doorType: req.body.yiDoorType
    });
  }

  let result = resultObj.calculate();
  res.render('budget/result', {
    data: result,
    user: {
      name: req.body.username,
      phone: req.body.phone,
      addr: req.body.addr
    },
    discount: parseFloat(req.body.discount) || 1,
    resultPrice: (result.totalPrice * (parseFloat(req.body.discount) || 1)/10).toFixed(2)
  });

});

module.exports = router;
