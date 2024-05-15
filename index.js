const db = new Dexie('FeederApp') // description = name / price = quantity / isPurchased = isLogged
db.version(2).stores({items: '++id, name, quantity, isLogged'})

const itemsForm = document.getElementById('itemForm')
const itemsDiv = document.getElementById('itemsDiv')
const totalPortionsDiv = document.getElementById('totalPortionDiv')

itemsForm.onsubmit = async (event) => {
    event.preventDefault()

    const name = document.getElementById(nameInput).value
    const quantity = document.getElementById(quantityInput).value
    const time = document.getElementById(timeInput).value

    await db.items.add({ name, quantity, time})

    itemForm.reset()
}