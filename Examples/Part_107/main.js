'use strict';
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
  openDatabaseConnection();     // 'Database connection open'
  try {
    getUsersByName(22);
  } catch(error) {
    console.log(error);         // TypeError: String expected
    closeDatabaseConnection();  // 'Database connection closed'
    throw new DBError('Error during communication with the database');
  }
  closeDatabaseConnection();    // Not executed
}
class DBError extends Error {

}
accessDatabase();