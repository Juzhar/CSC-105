let submitbutton = document.getElementById("submitbutton");
let form_name = document.getElementById("name");
let form_email = document.getElementById("email");
let form_message = document.getElementById("message"); 
let name_error = document.getElementById("name-error");
let email_error = document.getElementById("email-error");

function validate_name(name) {
	if (name.includes(" ") == false) {
		name_error.innerText = "Must include first and last name.";
		return false;
	} else {
		name_error.innerText = "";
		return true;
	}
}
function validate_email(email) {
	if (email.includes(".com") == false || email.includes("@") == false) {
		email_error.innerText = "Must be a valid email.";
		return false;
	} else {
		const indexperiod = email.indexOf(".");
		const indexat = email.indexOf("@");
		if (indexperiod < indexat) {
			email_error.innerText = "Must be a valid email.";
			return false;
		} else {
			email_error.innerText = "";
			return true;
		}
	}
}
submitbutton.addEventListener("click", function (event) {
	let name_value = form_name.value;
	let email_value = form_email.value;
	
	let verified = true;
	
	if (!validate_name(name_value)) {
		verified = false;
	}
	if (!validate_email(email_value)) {
		verified = false;
	}
	if (!verified) {
		event.preventDefault();
	}
	name_error.innerText = "Must include first and last name.";
});

form_name.addEventListener("input", function () {
	validate_name(form_name.value);
});

form_email.addEventListener("input", function () {
	validate_email(form_email.value);
});
