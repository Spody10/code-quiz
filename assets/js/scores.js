function postHighscore () {
    //get scores or set to empty array
    var highscore = JSON.parse(window.localStorage.getItem("highscore")) || [];

    //sort highscores in descending order
    highscore.sort( function ( a, b ) {
        return b.score - a.score;
    } );

    highscore.forEach(function(score) {
        //
        var liTag = document.createElement ('li');
        liTag.textContent = score.initials + " - " + score.score;

        // display
        var olEl = document.getElementById("highscore");
        olEl.appendChild(liTag);
    });
}

function clearHighscore() {
    window.localStorage.removeItem("highscore");
    window.location.reload();
}

document.getElementById('clear').onclick = clearHighscore;


postHighscore();
