/*jshint esversion: 6 */

let btn = document.getElementById('check');

randomVerb('verbImage');

function validateAnswer() {
    for (const iterator of dataVerbs) {
        if (document.getElementById('verbImage').src === iterator.imgEnlace) {
            if ((document.getElementById('pastAnswer').value).toUpperCase() === (iterator.verbPast).toUpperCase()) {
                document.getElementById('pastAnswer').style.border = "2px solid rgb(134, 206, 101)";
            } else {
                document.getElementById('pastAnswer').style.border = "2px solid rgb(206, 101, 101)";
            }
            if ((document.getElementById('presentAnswer').value).toUpperCase() === (iterator.verbnName).toUpperCase()) {
                document.getElementById('presentAnswer').style.border = "2px solid rgb(134, 206, 101)";
            } else {
                document.getElementById('presentAnswer').style.border = "2px solid rgb(206, 101, 101)";
            }
            if ((document.getElementById('futureAnswer').value).toUpperCase() === (iterator.verbFuture).toUpperCase()) {
                document.getElementById('futureAnswer').style.border = "2px solid rgb(134, 206, 101)";
            } else {
                document.getElementById('futureAnswer').style.border = "2px solid rgb(206, 101, 101)";
            }
        }
    }
}

btn.addEventListener('click', validateAnswer);