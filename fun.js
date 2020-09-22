






const fullBox = document.querySelector(".FullWrapper");
window.addEventListener("keyup",wali);



function wali(e){

	if (e.keyCode==37) {
	fullBox.style.transform="translate(-200%, -45%)"
	}

	else if (e.keyCode == 39){
		fullBox.style.transform="translate(100%, -45%)";
	};

};