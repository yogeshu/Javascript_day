const main = document.getElementById('main')
const adduserBtn = document.getElementById('add-user')
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-mill');
const sortBtn = document.getElementById('calculate-wealth');
const calculateWealthBtn = document.getElementById(
'calculate_wealth'
)

let data = [];

// Fetch reandom user and add money
getRandomUser();
async  function getRandomUser(){
     const res = await fetch('https://randomuser.me/api/');
    const data =  await res.json();

  const user = data.results[0];

  const newUser = {
      name:    `${user.name.first} ${user.name.last}`,
      money: Math.floor(Math.random() * 1000000)
  }
  addData(newUser);
}

// add new objt to data arr

function addData(obj){
    data.push(obj);
}