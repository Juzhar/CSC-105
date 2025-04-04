const add_button = document.querySelector("#addbutton");
const ul = document.querySelector('.tasklist');


function add_item() {
	let new_div = document.createElement("div");
	new_div.classList.add("listitem");
	let user_task = document.querySelector('#user_input');
	const li = document.createElement('li');
	const new_complete_button = document.createElement('button');
	const new_remove_button = document.createElement('button');
	li.innerText = user_task.value
	li.classList.add("litext");
	new_complete_button.innerText = "Complete"
	new_complete_button.classList.add("button");
	new_remove_button.innerText = "Remove"
	new_remove_button.classList.add("button");
	new_complete_button.classList.add('complete');
	new_complete_button.addEventListener("click", function () {
			this.parentNode.classList.add("completed");
		});
	new_remove_button.classList.add('remove');
	new_remove_button.addEventListener("click", function () {
			this.parentNode.remove();
		});
	new_div.appendChild(li);
	new_div.appendChild(new_complete_button);
	new_div.appendChild(new_remove_button);
	ul.appendChild(new_div);
	user_task.value = ""
}
add_button.addEventListener("click", function () {
	add_item()
});
var input = document.querySelector('#user_input')
input.addEventListener("keydown", function (e) {
    if (e.code === "Enter") { 
        add_item()
    }
});




