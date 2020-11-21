/*jshint esversion: 6 */


fullVerbsCombobox('verbs');
randomVerb();

function bringProperties() {
    let verb = document.getElementById('verbs').value;
    for (const iterator of dataVerbs) {
        switch (verb) {
            case iterator.verbnName:
                document.getElementById('verbTraduction').innerHTML = iterator.verbTraduction;
                document.getElementById('verbPast').innerHTML = iterator.verbPast;
                document.getElementById('verbFuture').innerHTML = iterator.verbFuture;
                break;
            default:
                break;
        }
    }
}