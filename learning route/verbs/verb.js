/*jshint esversion: 6 */


fullVerbsCombobox('verbs');

function bringProperties() {
    let verb = document.getElementById('verbs').value;
    for (const iterator of dataVerbs) {
        switch (verb) {
            case iterator.verbnName:
                document.getElementById('verbTraduction').innerHTML = iterator.verbTraduction;
                document.getElementById('noS').innerHTML = iterator.verbnName;
                document.getElementById('S').innerHTML = iterator.verbS;
                break;
            default:
                break;
        }
    }
}