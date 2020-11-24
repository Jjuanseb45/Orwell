level = parseInt(localStorage.getItem('level'));

if (level === 1) {
    document.getElementById('title').innerHTML = "Facil Pronunciación";
    document.getElementById('itemIdentifier').setAttribute('src', '../resources/caballero.png');
} else if (level === 2) {
    document.getElementById('title').innerHTML = "Media pronunciación";
    document.getElementById('itemIdentifier').setAttribute('src', '../resources/wizard.png');
} else if (level === 3) {
    document.getElementById('title').innerHTML = "Dificil Pronuncación";
    document.getElementById('itemIdentifier').setAttribute('src', '../resources/king.png');
}

fullList(level, "listText", "listPronunciation");