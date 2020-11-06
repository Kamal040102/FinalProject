// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});

const colorFlipperElement = document.getElementById("colorFlipper");
const bgColor = document.querySelector("body");

function myFunction(){
	var colorToggler = bgColor.style.backgroundColor = "rgb("+ Math.floor(Math.random()*255) +", "+ Math.floor(Math.random()*255) +", "+ Math.floor(Math.random()*255) +" )";
}



colorFlipperElement.addEventListener('click', myFunction);