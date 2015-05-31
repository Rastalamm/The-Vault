'use strict';
module.exports = function() {

   var vault = {

    setValue : function(key, value){
      this.key = value;
    },

    getValue : function(key){
      if(this.key){
        return vault.key;
      }else{
        return null;
      }
    }
  };
  return vault;
};