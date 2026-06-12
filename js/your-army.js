import resourceStorage from "./modules/resource-storage.js";

const storage = resourceStorage;

const goldCount = document.querySelector("#gold-count");
const metalCount  = document.querySelector("#metal-count");
const woodCount = document.querySelector("#wood-count");

let goldAmmount = parseInt(storage.getItem("gold")) || 0;
let metalAmmount = parseInt(storage.getItem("metal")) || 0;;
let woodAmmount = parseInt(storage.getItem("wood")) || 0;

goldCount.innerHTML = goldAmmount;
metalCount.innerHTML = metalAmmount;
woodCount.innerHTML = woodAmmount;