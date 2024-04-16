document.addEventListener('DOMContentLoaded', function() {
    var countRightKey = 0;
    var countUpKey = 0;
    var countDownKey = 0;

    var maxCount = 4;

    document.addEventListener('keydown', function(e) {
        if (e.keyCode === 39) { // Rechter toets
            countRightKey++;
        } else if (e.keyCode === 38) { // Omhoog toets
            countUpKey++;
        } else if (e.keyCode === 40) { // Omlaag toets
            countDownKey++;
        }

        // Controleer of alle toetsen 4 keer zijn ingedrukt
        if (countRightKey >= maxCount && countUpKey >= maxCount && countDownKey >= maxCount) {
            document.getElementById('easter-egg-link').style.display = 'inline';
        }
    });
});
