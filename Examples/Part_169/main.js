'use strict';
[2, 4, 6].includes(4);                      // true
[1, 3, 7].includes(4);                      // false
['Rick', 'Morty'].includes('Summer');       // false
['Rick', 'Morty'].includes('Morty');        // true
[2, 4, 6, 420, 42, 84].includes(6, 2);      // true
[2, 4, 6, 420, 42, 84].includes(6, 4);      // false