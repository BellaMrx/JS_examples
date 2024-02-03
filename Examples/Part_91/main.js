'use strict';
var name = "global name";
function getNameGlobal() {
  return this.name;
}
console.log(getNameGlobal());   // output: global name