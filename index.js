// const db = new Dexie('FeederApp') // description = name / price = quantity / isPurchased = isLogged
// db.version(2).stores({items: '++id, name, quantity, isLogged'})

// const itemsForm = document.getElementById('itemForm')
// const itemsDiv = document.getElementById('itemsDiv')
// const totalPortionsDiv = document.getElementById('totalPortionDiv')

// itemsForm.onsubmit = async (event) => {
//     event.preventDefault()

//     const name = document.getElementById(nameInput).value
//     const quantity = document.getElementById(quantityInput).value
//     const time = document.getElementById(timeInput).value

//     await db.items.add({ name, quantity, time})

//     itemForm.reset()
// }

// get JSON data from the server

let data;

function getData() {
    data = fetch(`https://api.com/api`)
      .then(response => response.json())
      .then(data => displayData(data))
      .catch(error => console.log(error))
}

function displayData(data) {
    if(!data.name) {
        data.name = prompt("Enter a name for your pet: "); // you can change this prompt as you wish
    }
    document.querySelector("#name").innerHTML = data.name;
    document.querySelector("#foodLeft").innerHTML = data.food;
}

// once the server is up and running you can just call the getData()
// function (but make sure to use the correct url with fetch)
