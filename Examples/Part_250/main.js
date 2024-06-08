'use strict';
const button = {
  handler : null,
// Function that expects a callback handler
  onClick : function(handler) {
    this.handler = handler;
  },
  click : function() {
    this.handler();
  }
};
const handler = {
  log: function() {
    console.log("Button geklickt.");
  },
// Object method that is registered below as a callback handler
  handle: function() {
    this.log();
  }
}
// Register the callback handler
const boundFunction = handler.handle.bind(handler);
button.onClick(boundFunction);
// Implicit activation of the callback handler
button.click();