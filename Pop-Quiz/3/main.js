//console.log(date);

let container = document.querySelector(".wrapper");
let dateDiv = document.createElement("div");
let otherText = document.createElement("span")
let color = ["cyan", "chartreuse", "orange","tomato",""]


function displayDate(){
	let date = new Date;
	container.appendChild(dateDiv);
	container.appendChild(otherText);
	dateDiv.classList.add("date");
	otherText.classList.add("other");
	otherText.innerHTML = "Right now it is";
	dateDiv.innerHTML = date;
}

function clearPage(){
	dateDiv.innerHTML = " ";
}

displayDate();
setInterval(displayDate, 1000);

