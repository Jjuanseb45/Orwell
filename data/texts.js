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
    new text(1, 'The fox and the clown', 'aaaaaaaaa', 1),
    new text(2, 'The red butterfly', 'bbbbb', 2),
    new text(3, 'The hobbo', 'ssssss', 1),
    new text(4, 'The hand of god', 'ssssss', 3),
    new text(5, 'The head of Carl', 'ssssss', 3),
    new text(6, 'The hat of the invisible ', 'ssssss', 2),
    new text(7, 'The sword', 'ssssss', 1)
];

function fullList(level, idList) {
    var mainList = document.getElementById(idList);
    for (const iterator of dataTexts) {
        if (iterator.level === level) {
            let item = iterator.nameText;
            let elem = document.createElement("li");
            let elem2 = document.createElement("a");
            elem2.href = "#";
            elem2.innerHTML = item;
            mainList.appendChild(elem);
            elem.appendChild(elem2);
        }
    }   
}