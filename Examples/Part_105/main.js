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
  openDatabaseConnection();   // 'Database connection open'
  try {
    getUsersByName(19);
  } catch(error) {
    console.error(error);     // TypeError: String expected
  }
  closeDatabaseConnection();  // 'Database connection closed'
}
accessDatabase();