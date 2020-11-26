/*jshint esversion: 6 */



title = localStorage.getItem('titlelecture');

document.getElementById('title').innerHTML = title;

bringQuestions(title, 'Questions');