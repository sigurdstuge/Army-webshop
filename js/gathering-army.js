import warriorsObjects from "./modules/warrior-module.js";
import resourceStorage from "./modules/resource-storage.js";

const storage = resourceStorage;

const goldCount = document.querySelector("#gold-count");
const metalCount  = document.querySelector("#metal-count");
const woodCount = document.querySelector("#wood-count");


//henter html elementer
const searchFilter = document.querySelector("#search-filter");
const searchResult = document.querySelector("#search-result");
const warriorContainer = document.querySelector("#warrior-container");


let goldAmmount = parseInt(storage.getItem("gold")) || 0;
let metalAmmount = parseInt(storage.getItem("metal")) || 0;;
let woodAmmount = parseInt(storage.getItem("wood")) || 0;

goldCount.innerHTML = goldAmmount;
metalCount.innerHTML = metalAmmount;
woodCount.innerHTML = woodAmmount;

const warriorData = (filterData) => {
	filterData.forEach((item, index) => {


		warriorContainer.innerHTML += `

		   <article id="warrior-box">
        <h3 id="warrior-topic">${item.name}</h3>
        { <img id="warrior-image" src="./assets/${item.image}" alt="warrior"> }
        <p id="warrior-price">${item.price}</p>
        <button data-index = "${index}" class="warrior-button">${item.buy}</button>
      </article>
		`;
	});
};
warriorData(warriorsObjects);


const warriorButton = (i) => {
	const selectedWarrior = warriorsObjects[i];
	console.log(selectedWarrior)
	
	if(goldAmmount >= selectedWarrior.price) {
		goldAmmount -= selectedWarrior.price
		goldCount.innerHTML = goldAmmount;
		localStorage.setItem("gold", goldAmmount)
		storage.addWarriorToStorage(selectedWarrior);
	} else {
		alert("not enough coins.")
	}
}

const selectProductButton = () => {
	  const warriorButtons = document.querySelectorAll(".warrior-button");
	 warriorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = button.getAttribute("data-index");
      warriorButton(index);
    });
  });
}
selectProductButton();