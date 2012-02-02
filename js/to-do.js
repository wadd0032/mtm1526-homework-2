var list = document.getElementById('list');
var task = document.getElementById('task');

document.getElementById('add').addEventListener('click', function (ev) {

	var newTask = document.createElement('li');
		newTask.innerHTML = task.value;
		list.appendChild(newTask);
	
	console.log(newTask);

}, false);

list.addEventListener('click', function (e) {
  if (e.target.className == 'done') {
    e.target.className = '';
  } else {
    e.target.className = 'done';
  }
}, false);


