'use strict';
let config = require('./config.json');
let Obj = require('../utils/obj');
class Wardrobe {
  constructor (cfg) {
    Obj.mix(this, cfg || {});
    this.attr = config.wardrobe;
  }

  calculate () {
    let area = (this.width * this.height).toFixed(2);
    let totalPrice = 0;
    let attrItem = this.attr.body[this.bodyType];
    let list = [];
    list.push({
      name: '柜体',
      type: attrItem.name,
      count: (area * this.param).toFixed(2),
      price: attrItem.price,
      totalPrice: (area * this.param * attrItem.price).toFixed(2)
    });
    totalPrice += area * this.param * attrItem.price;
    attrItem = this.attr.door[this.doorType];
    list.push({
      name: '门板',
      type: attrItem.name,
      count: area ,
      price: attrItem.price,
      totalPrice: (area * attrItem.price).toFixed(2)
    });
    totalPrice += area * attrItem.price;
    totalPrice = totalPrice.toFixed(2);
    return {
      list: list,
      totalPrice: totalPrice
    };
  }

}

module.exports = Wardrobe;