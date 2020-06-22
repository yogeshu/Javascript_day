const main = document.getElementById("main");
const adduserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-mill");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

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

// funct

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
// th double user 

function doubleMoney(user) {
    data= data.map(user=>{
        return{ ...user, money: user.money * 2}
    });
    updateDOM();
}

function sortByRich() {
    data.sort((a,b) => b.money - a.money);
    updateDOM();
}

 function showMillionaires(){
    data = data.filter(user => user.money > 1000000)
    updateDOM();
 }

 function cWealth() {
    const Wealth = data.reduce((acc,user) => (acc += user.money), 0)
    const WealthE = document.createElement('div');
    WealthE.innerHTML = `<h3> Total Wealth : <strong> ${formatMoney(Wealth)} </strong> </h3> `
    main.appendChild(WealthE);

}

// the fncton for sort the money 
// add user on click






adduserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRich);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', cWealth);



// money as money

function formatMoney(number) {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"); // 12,345.67
}
