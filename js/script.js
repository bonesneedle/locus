const body = document.body;
const menu = document.querySelector('.header__menu');
const burger = document.querySelector('.header__burger');

const inputs = document.querySelectorAll('.form-contact__input');
let placeHolderName;
let placeHolderEmail;
let placeHolderDescription;
if (inputs.length > 0) {
	inputs.forEach(element => {
		if (element.placeholder) {
			if (element.name == "name")
				placeHolderName = element.placeholder;
			else if (element.name == "email")
				placeHolderEmail = element.placeholder;
			else if (element.name = "description")
				placeHolderDescription = element.placeholder;

			element.addEventListener("focus", (e) => {
				element.placeholder = "";
			});
			element.addEventListener("blur", (e) => {
				if (element.name == "name")
					element.placeholder = placeHolderName;
				else if (element.name == "email")
					element.placeholder = placeHolderEmail;
				else if (element.name = "description")
					element.placeholder = placeHolderDescription;
			});
		}
	});
}

document.addEventListener("click", (e) => {
	if (e.target.closest('.header__burger')) {
		menu.classList.toggle('_active-burger');
		burger.classList.toggle('_active-burger');
		// if (body.style.overflow == "auto")
		// 	body.style.overflow = "hidden";
		// else body.style.overflow = "auto"
	}
});
