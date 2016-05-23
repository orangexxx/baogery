'use strict';
let config = require('./config.json');
let Obj = require('../utils/obj');
class Cupboard {
  constructor(cfg) {
    Obj.mix(this, cfg || {});
    this.attr = config.cupboard;
  }

  calculate () {
  	let list = [];
  	let totalPrice = 0;
  	let attrItem = this.attr.downBody[this.bodyType];
  	list.push({
  		name: '下柜柜体',
  		type: attrItem.name,
  		count: this.downLen ,
  		price: attrItem.price,
  		totalPrice: this.downLen * attrItem.price
  	});
  	totalPrice += this.downLen * attrItem.price;
  	attrItem = this.attr.upBody[this.bodyType];
  	list.push({
  		name: '上柜柜体',
  		type: attrItem.name,
  		count: this.upLen,
  		price: attrItem.price,
  		totalPrice: this.upLen * attrItem.price
  	});
  	totalPrice += this.upLen * attrItem.price;
  	attrItem = this.attr.door[this.doorType];
  	list.push({
  		name: '下柜门板',
  		type: attrItem.name,
  		count: this.downLen,
  		price: attrItem.price,
  		totalPrice: this.downLen * attrItem.price
  	});
  	list.push({
  		name: '上柜门板',
  		type: attrItem.name,
  		count: this.upLen,
  		price: attrItem.price,
  		totalPrice: this.upLen * attrItem.price
  	});
  	totalPrice += (this.downLen + this.upLen) * attrItem.price
  	attrItem = this.attr.stone[this.stoneType];
  	list.push({
  		name: '石英石台面',
  		type: attrItem.name,
  		count: this.downLen,
  		price: attrItem.price,
  		totalPrice: this.downLen * attrItem.price
  	});
  	totalPrice += this.downLen * attrItem.price;
  	return {
  		list : list,
  		totalPrice: totalPrice
  	};
  }


}

module.exports = Cupboard;