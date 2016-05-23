'use strict';
let Obj = {
  mix: function(recevior, supplier, overwrite) {
    for (let key in supplier) {
      if (overwrite || !recevior[key]) {
        recevior[key] = supplier[key];
      }
    }
    return recevior;
  },
  merge: function() {
    let res = {};
    for (let i = 0; i < arguments.length; ++i) {
      let arg = arguments[i];
      for (let key in arg) {
        res[key] = arg[key];
      }
    }
    return res;
  },
  isEmpty: function() {},
  isString: function() {},
  isArray: function() {},
  isObject: function() {}

};

module.exports = Obj;