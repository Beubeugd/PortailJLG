function change() {
	let boutton = document.querySelector(".name9");
	let valid = document.querySelector(".btn4");
	boutton.classList.toggle("active");
	valid.classList.toggle("active");
}

function valid() {
	let validation = document.querySelector(".name9").value;
	console.log(validation);

	if (validation == "azerty") {
		alert("mot de passe valide");
		window.location.href='admin.html';
	} else {
		alert("mot de passe non valide");
	}
}

