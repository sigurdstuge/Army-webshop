const resourceStorage = (() => {
  const deleteStorageBtn = document.querySelector("#clear-btn");

  const clearStorage = () => {
    localStorage.clear();
  };

  const wood = (amount) => {
    localStorage.setItem("wood", JSON.stringify(amount));
  };

  const metal = (amount) => {
    localStorage.setItem("metal", JSON.stringify(amount));
  };

  const gold = (amount) => {
    localStorage.setItem("gold", JSON.stringify(amount));
  };

  const addWarriorToStorage = (warrior) => {
    let currentArmy = JSON.parse(localStorage.getItem("warrior"));
    if (currentArmy == null) {
      currentArmy = [];
    }
    currentArmy.push(warrior);
    localStorage.setItem("warrior", JSON.stringify(currentArmy));
  };

  const getItem = (key) => {
	return localStorage.getItem(key);
}

  return {
    wood,
    metal,
    gold,
    clearStorage,
    addWarriorToStorage,
    getItem
  };
})();
export default resourceStorage;
