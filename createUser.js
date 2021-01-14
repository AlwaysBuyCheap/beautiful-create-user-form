const email = document.getElementById("email");
const accountName = document.getElementById("name");
const password = document.getElementById("pass1");
const repeatPassword = document.getElementById("pass2");
const form = document.getElementById("form");
const submit = document.getElementById("submit")

email.addEventListener("input", function (event) {
	if (email.validity.typeMismatch) {
		email.setCustomValidity("I am expecting an e-mail address!");
	} else {
		email.setCustomValidity("");
	}
});

form.addEventListener("submit", (event) => {
	if(password.value != repeatPassword.value) {
		//repeatPassword.setCustomValidity("Password must be the same");
		//pass2.reportValidity();
		event.preventDefault();
		document.getElementById("reportPasswordMissMatch").style.display = "initial";
		const passwordClassElements = document.getElementsByClassName("password");
		for(i=0; i<passwordClassElements.length; i++) {
            passwordClassElements[i].style.border = "1px solid red";
            passwordClassElements[i].style.boxShadow = " inset 0px 0px 3px red";
		}
		//event.stopPropagation();
	}
});

submit.addEventListener("mouseover", () => {
    submit.style.backgroundImage = "initial";
    submit.style.backgroundColor = "rgb(238, 183, 81)";
});

submit.addEventListener("mouseout", () => {
    submit.style.backgroundColor = "initial";
    submit.style.backgroundImage = "linear-gradient(to bottom, rgb(238, 215, 172), rgb(238, 183, 81))";
});

