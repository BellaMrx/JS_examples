/* generates a random number from 0-10 */
function random1() {
    var rnd1 = Math.floor(Math.random() * 10);
    document.getElementById('rndNr1').value = rnd1;
}

/* generates a random number from 0-1000000 */
function random2() {
    var rnd2 = Math.floor(Math.random() * 1000000);
    document.getElementById('rndNr2').value = rnd2;
}

