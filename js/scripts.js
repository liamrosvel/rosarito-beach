//Variables and objects

var toggleMenu = document.getElementById("toggle-menu");
var	nav = document.getElementById("nav");

var checkin = document.getElementById("check-in");
var checkout = document.getElementById("check-out");

var openModal = document.getElementById("open-modal");
var closeModal = document.getElementById("close-modal");
var modal = document.getElementById("book-modal");

var calendar1 = document.getElementById("calendar-one");
var calendar2 = document.getElementById("calendar-two");

//functions

var showMenu = function() {
	nav.classList.toggle("show-menu");
}

//asigning events

//function to show menu off canvas
toggleMenu.addEventListener('click', showMenu);

//function to open modal
openModal.addEventListener('click', function(){
	modal.classList.add('open-modal');
});

//function to close modal
closeModal.addEventListener('click', function(){
	modal.classList.remove('open-modal');
});

//function to animate the calendars

checkin.addEventListener('click', function(){
	calendar1.classList.toggle('calendar-play');
});

checkout.addEventListener('click', function(){
	calendar2.classList.toggle('calendar-play');
});