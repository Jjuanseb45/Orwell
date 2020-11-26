/*jshint esversion: 6 */

class text {
    constructor(id, nameText, content, level) {
        this.id = id;
        this.nameText = nameText;
        this.content = content;
        this.level = level;
    }
}

let dataTexts = [
    new text(1, 'Videogames', Videogames, 1),
    new text(2, 'The Menu', menu, 2),
    new text(3, 'The School', Ana, 1),
    new text(4, 'A New Home', aNewHome, 3),
    new text(5, 'At The Airport', atTheAirport, 3),
    new text(6, 'The Nurse', description, 2),
    new text(7, 'My Day', routine, 1)
];

function fullList(level, idList) {
    var mainList = document.getElementById(idList);
    for (const iterator of dataTexts) {
        if (iterator.level === level) {
            let item = iterator.nameText;
            let elem = document.createElement("li");
            let elem2 = document.createElement("a");
            elem2.href = "readingPage/index.html";
            elem2.innerHTML = item;
            elem2.setAttribute('id', iterator.id);
            elem2.setAttribute('onclick', 'getTitle(this.id)');
            mainList.appendChild(elem);
            elem.appendChild(elem2);
        }
    }
}

function bringLecture(idLecture, idtittleHtml, contentLectureHTML, imagenHTML, imagenFacil, imagenMedio, imagenDificil) {
    for (const iterator of dataTexts) {
        if (idLecture === iterator.id) {
            document.getElementById(idtittleHtml).innerHTML = iterator.nameText;
            document.getElementById(contentLectureHTML).innerHTML = iterator.content;
            document.title = "Orwell: " + iterator.nameText;
            switch (iterator.level) {
                case 1:
                    document.getElementById(imagenHTML).setAttribute('src', imagenFacil);
                    break;
                case 2:
                    document.getElementById(imagenHTML).setAttribute('src', imagenMedio);
                    break;
                case 3:
                    document.getElementById(imagenHTML).setAttribute('src', imagenDificil);
                    break;
                default:
                    break;
            }
        }
    }
}