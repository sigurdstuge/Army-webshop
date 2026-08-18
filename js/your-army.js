import resourceStorage from "./modules/resource-storage.js";
//import warriorModule from "./modules/warrior-module.js";

const storage = resourceStorage;


const goldCount = document.querySelector("#gold-count");
const metalCount = document.querySelector("#metal-count");
const woodCount = document.querySelector("#wood-count");
const yourArmy = document.querySelector("#your__army");

let goldAmmount = parseInt(storage.getItem("gold")) || 0;
let metalAmmount = parseInt(storage.getItem("metal")) || 0;
let woodAmmount = parseInt(storage.getItem("wood")) || 0;

goldCount.innerHTML = goldAmmount;
metalCount.innerHTML = metalAmmount;
woodCount.innerHTML = woodAmmount;

const renderYourArmy = () => {
  const army = JSON.parse(storage.getItem("warrior")) || [];
  console.log(army);
  
  army.forEach((warrior) => {
    yourArmy.innerHTML += `
  <article id="warrior-box">
        <h3 id="warrior-topic">${warrior.name}</h3>
        <img id="warrior-image" src="./assets/${warrior.image}" alt="warrior"> 
        <button id="favorite-button">☆</>
      </article>
  `;
  })
};
renderYourArmy();