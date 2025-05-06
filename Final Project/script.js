const search_button = document.querySelector("#searchbutton");
const recipes = document.querySelectorAll('.recipe_name');
const descriptions = document.querySelectorAll('.description');
const recipesArray = Array.from(recipes);
const descriptionsArray = Array.from(descriptions);
const myElements = [];
myElements.push(...recipesArray);
myElements.push(...descriptionsArray);
search_button.addEventListener("click", function () {
			let user_input = document.querySelector('#search');
			user_text = user_input.value;
			for (let i = 0; i < myElements.length; i++) {
				myElem = myElements[i];
				elem_text = myElements[i].innerText;
				if (elem_text.includes(user_text)){
					myElem.parentNode.classList.remove("hidden");
				} else if (elem_text.toLowerCase().includes(user_text.toLowerCase())) {
					myElem.parentNode.classList.remove("hidden");
				} else {
					myElem.parentNode.classList.add("hidden");
				}
			}
		});