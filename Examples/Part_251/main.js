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
    console.log("Button clicked.");
  },
// Object method that is registered below as a callback handler
  handle: function() {
    this.log();
  }
}
// Register the callback handler
button.onClick(function() {
  handler.handle();
});
// Implicit activation of the callback handler
button.click();

