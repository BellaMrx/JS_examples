'use strict';
function init() {
  function openDatabaseConnection() {
    console.log('Database connection open');
  }
  function closeDatabaseConnection() {
    console.log('Database connection closed');
  }
  function getUsersByName(name) {
    if(typeof name !== 'string') {
      throw new TypeError('String expected');
    }
    /* ... */
  }
  function accessDatabase() {
    openDatabaseConnection();   // 'Database connection open'
    try {
      getUsersByName(19);
    } catch(error) {
      console.log(error);       // TypeError: String expected
      throw new DBError('Error during communication with the database');
    }
    closeDatabaseConnection();  // Not executed
  }
  function showUsers() {
    try {
      accessDatabase();
    } catch(error) {
      document.getElementById('message').textContent = error.message;
    }
  }
  showUsers();
}
class DBError extends Error {

}
document.addEventListener('DOMContentLoaded', init);