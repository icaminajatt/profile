// Navigation
var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function togglemenu() {
    if (menuList.style.maxHeight == "0px") 
        {
            menuList.style.maxHeight = "130px";
        }
    else 
        {
            menuList.style.maxHeight = "0px";
        }
}

// Dark Mode
const darkBtn = document.querySelector('.fas');
const bodyEl = document.querySelector('body');

const darkMode = () => {
    bodyEl.classList.toggle('dark-mode')
}

darkBtn.addEventListener('click', () => {
    // Get the value of the "dark" item from the local storage on every click
    setDarkMode = localStorage.getItem('dark');

    if(setDarkMode !== "on") {
        darkMode();
        // Set the value of the itwm to "on" when dark mode is on
        setDarkMode = localStorage.setItem('dark', 'on');
    } else {
        darkMode();
        // Set the value of the item to  "null" when dark mode if off
        setDarkMode = localStorage.setItem('dark', null);
    }
});

// Get the value of the "dark" item from the local storage
let setDarkMode = localStorage.getItem('dark');

// Check dark mode is on or off on page reload
if(setDarkMode === 'on') {
    darkMode();
}

// Form

function validateName() { //test input for 2-15 allowed characters
	var fName = document.getElementById("name").value;
	var re1 = /^[a-zA-Z\s\'\-]{2,50}$/;
	
	if (re1.test(fName)) { //if input is valid, update page to show successful entry
		document.getElementById("namePrompt").style.color = "green";
        document.getElementById("namePrompt").innerHTML = "<strong>valid</strong>";
		return true;
	}
	
	else { //if input is invalid, update page to prompt for new input
		document.getElementById("namePrompt").style.color = "Red";
		document.getElementById("namePrompt").innerHTML = "<strong>invalid</strong>";
		return false;
	}
}

function validateEmail() {
    var fEmail = document.getElementById("email").value;
    var re2 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (re2.test(fEmail)) { //if input is valid, update page to show successful entry
		document.getElementById("emailPrompt").style.color = "green";
        document.getElementById("emailPrompt").innerHTML = "<strong>valid</strong>";
		return true;
	}
	
	else { //if input is invalid, update page to prompt for new input
		document.getElementById("emailPrompt").style.color = "Red";
		document.getElementById("emailPrompt").innerHTML = "<strong>invalid</strong>";
		return false;
	}
}

function validateNum() { //test xxx-xxx-xxx
	var phoneNumber = document.getElementById("phone").value;
	var re3 = /^\d{11}$/;
	
	if (re3.test(phoneNumber)) { //if input is valid
		document.getElementById("phonePrompt").style.color = "green";
		document.getElementById("phonePrompt").innerHTML = "<strong>valid</strong>";
		return (true);
	}
	
	else { //if input is invalid
		document.getElementById("phonePrompt").style.color = "Red";
		document.getElementById("phonePrompt").innerHTML = "<strong>invalid</strong>";
		return (false);
	}
}

// Greeting
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };