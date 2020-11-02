let btn= document.querySelector(".header__burger");
let mb= document.querySelector(".header__menu");

btn.addEventListener("click", function(){
	mb.classList.toggle("active");
	btn.classList.toggle("active");
});