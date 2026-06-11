import resourceStorage from "./modules/resource-storage.js";

const storage = resourceStorage;
const mine = document.querySelector("#resources-mine");
const wood = document.querySelector("#resources-wood");
const goldCount = document.querySelector("#gold-count");
const metalCount  = document.querySelector("#metal-count");
const woodCount = document.querySelector("#wood-count");

let goldAmmount = parseInt(storage.getItem("gold")) || 0;
let metalAmmount = parseInt(storage.getItem("metal")) || 0;
let woodAmmount = parseInt(storage.getItem("wood")) || 0;


goldCount.innerHTML = goldAmmount;
metalCount.innerHTML = metalAmmount;
woodCount.innerHTML = woodAmmount;


const mineClick = () => {
	const randomNumber = Math.random();
	if (randomNumber < 0.50) {
		goldAmmount++
		goldCount.innerHTML = goldAmmount;
		storage.gold(goldAmmount);
	} else {
		metalAmmount++
		metalCount.innerHTML = metalAmmount;
		storage.metal(metalAmmount);
		console.log(randomNumber)
	}
}

const woodClick = () => {
const randomNumber = Math.floor(Math.random() * 10) + 1;
woodAmmount += randomNumber
woodCount.innerHTML = woodAmmount;
storage.wood(woodAmmount);
}

mine.addEventListener("click", mineClick);
wood.addEventListener("click", woodClick);