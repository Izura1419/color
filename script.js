let bg = document.querySelector("body");
let span = document.querySelector("span");

function get(max,min){
	let f = Math.floor(Math.random() * (max - min + 1)) + min;
	return f;
}

function set(){
	setTimeout(Click,0);
}

function Click() {
	let a = get(255,0);
	let b = get(255,0);
	let c = get(255,0);

	let d = "rgb" + "(" + a + "," + b + "," + c + ")";

	bg.style.backgroundColor = d ;

	span.innerHTML = d;

	setTimeout(Click,2000);
}