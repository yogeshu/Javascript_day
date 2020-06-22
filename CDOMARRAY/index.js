const main = document.getElementById("main");
const adduserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-mill");
const sortBtn = document.getElementById("calculate-wealth");
const calculateWealthBtn = document.getElementById("calculate_wealth");

let data = [];

// Fetch reandom user and add money
getRandomUser();
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api/");
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  };
  addData(newUser);
}

// add new objt to data arr

function addData(obj) {
  data.push(obj);
  updateDOM();
}

// function

function updateDOM(provideData = data) {
  // Clear main div
  main.innerHTML = "<h2> <strong> Person </strong> Wealth </h2>";
  provideData.forEach(item => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong> ${item.name} </strong> ${formatMoney(
      item.money
    )} `;
    main.appendChild(element);
  });
}

// add user on click






adduserBtn.addEventListener('click', getRandomUser);

// money as money

function formatMoney(number) {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"); // 12,345.67
}
