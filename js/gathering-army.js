import warriorsObjects from "./modules/warrior-module.js";
//henter html elementer
const searchFilter = document.querySelector("#search-filter");
const searchResult = document.querySelector("#search-result");
const warriorContainer = document.querySelector("#warrior-container");

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
