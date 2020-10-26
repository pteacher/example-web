"use strict";

let button = document.getElementById('run-button'); // Document Object Model
let itemList = document.getElementById('todo-list');
let item = document.getElementById('new-value');

function change() {
	if (button.innerHTML == 'RUN') {
		button.innerHTML = 'READY';
	} else {
		button.innerHTML = 'RUN';
	}
}

function addItem() {
	var newItem = document.createElement("LI");
	var textNode = document.createTextNode(item.value);
	console.log(item);
	newItem.appendChild(textNode);
	newItem.addEventListener('click', function () {
		this.classList.toggle('completed');
	})

	itemList.insertBefore(newItem, itemList.childNodes[0]);
}

button.addEventListener("click", addItem);