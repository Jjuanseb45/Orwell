/*jshint esversion: 6 */

class textNpronunciation {
    constructor(grade, writing, pronunciation) {
        this.grade = grade;
        this.writing = writing;
        this.pronunciation = pronunciation;
    }
}

let dataPronunciations = [
    new textNpronunciation(1, 'Hello', 'Jelou'),
    new textNpronunciation(1, 'Music', 'Miusic'),
    new textNpronunciation(1, 'Library', 'Laibrari'),
    new textNpronunciation(2, 'How are you?', '¿Jau ar iu?'),
    new textNpronunciation(2, 'Am fine, thank you', 'Am, fain thenkiu'),
    new textNpronunciation(2, 'May I go to the bathroom please?', 'Mei ai gou tude bath rum plis?'),
    new textNpronunciation(3, 'How much wood would a woodchuck chuck if a woodchuck could chuck wood?', 'Jau mach wud wuld a wudchock chock if a wudchock culd chock wud'),
    new textNpronunciation(3, 'Black background, brown background', 'Blac bacgraund, braun bacgraund'),
    new textNpronunciation(3, 'I scream, you scream they screan, we all scream for an ince cream!', 'Ai scrim, iu scrim, dei creim, weol scrim for an ais crim')
];


function fullList(level, wiritinList, pronunciationList) {
    let mainList = document.getElementById(wiritinList);
    let secondaryList = document.getElementById(pronunciationList);
    for (const iterator of dataPronunciations) {
        if (iterator.grade === level) {
            let item = iterator.writing;
            let item2 = iterator.pronunciation;
            let elem = document.createElement("li");
            let element = document.createElement("li");
            elem.innerHTML = item;
            element.innerHTML = item2;
            mainList.appendChild(elem);
            secondaryList.appendChild(element);
        }
    }
}