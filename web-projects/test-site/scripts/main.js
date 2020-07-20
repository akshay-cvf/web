myHeading = document.querySelector('h1');
myButt = document.querySelector('button');

function setName() {
	 let myName = prompt('enter name');
	 if(!myName)
	 	setName();
	 else {
	 	 localStorage.setItem('name','myName');
	 myHeading.textContent = 'Mozilla is cool, ' + myName;
	 }
	
}

if(!localStorage.getItem('name')) {
	setName();
}
else {
	let newName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is cool, ' + newName;
}

myButt.onclick = function() {
	setName();
}