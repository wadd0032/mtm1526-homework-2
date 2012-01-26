var lists = document.getElementById('lists');
var task = document.getElementById('task');

document.getElementById('add').addEventListener('click', function (ev) {

	var newTask = document.createElement('li');
		newTask.innerHTML = task.value;
		lists.appendChild(newTask);
	
	console.log(newTask);

}, false);




