//VARIABLES AND OBJECTS

var toggleMenu = document.getElementById("toggle-menu");
var	nav = document.getElementById("nav");

var checkin = document.getElementById("check-in");
var checkout = document.getElementById("check-out");

var openModal = document.getElementById("open-modal");
var closeModal = document.getElementById("close-modal");
var modal = document.getElementById("book-modal");

var calendar1 = document.getElementById("calendar-one");
var calendar2 = document.getElementById("calendar-two");

var navBook = document.querySelector(".js-book-btn");
var navOpenModal = document.querySelector(".js-nav-modal");
var navCloseModal = document.querySelector(".js-nav-modal-close");

var landingCheckin = document.getElementById("landing-check-in");
var landingCheckout = document.getElementById("landing-check-out");
var landingPeople = document.getElementById("landing-people");

var landingCalendar1 = document.getElementById("landing-calendar-one");
var landingCalendar2 = document.getElementById("landing-calendar-two");
var landingPeopleOpt = document.getElementById("landing-people-opt");

//FUNCTIONS

var showMenu = function() {
	nav.classList.toggle("show-menu");
}

navBook.addEventListener('click', function(){
	navOpenModal.classList.add('open-modal-nav');
});

navCloseModal.addEventListener('click', function(){
	navOpenModal.classList.remove('open-modal-nav');
});


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

//function to animate calendars in landing section
landingCheckin.addEventListener('click', function(){
	landingCalendar1.classList.toggle('calendar-play-animation');
});

landingCheckout.addEventListener('click', function(){
	landingCalendar2.classList.toggle('calendar-play-animation');
});

landingPeople.addEventListener('click', function(){
	landingPeopleOpt.classList.toggle('calendar-play-animation');
});


//ASIGNING EVENTS

//function to show menu off canvas
toggleMenu.addEventListener('click', showMenu);