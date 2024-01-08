'use strict';
const isLoggedIn = true;
const isAdmin = false;
const isLoggedInAndAdmin = isLoggedIn && isAdmin;   // AND-operator
const isLoggedInOrAdmin = isLoggedIn || isAdmin;    // OR-operator
const isLoggedOut = !isLoggedIn;                    // Negation
console.log(isLoggedInAndAdmin);                    // false
console.log(isLoggedInOrAdmin);                     // true
console.log(isLoggedOut);                           // false