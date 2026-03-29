'use strict';

class Storage {
  #items;
  constructor(items) {
    this.#items = items;
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(itemToRemove) {
    this.#items = this.#items.filter((item) => item !== itemToRemove);
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scanner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
/*Declare the following class methods:

getItems() — returns an array of current products in a private property  items.

addItem(newItem) — accepts a new product  newItem and adds it to the product array in a private property  items of the object.

removeItem(itemToRemove) — accepts a string with the product name itemToRemove and removes it from the product array in the private 
property  items of the object.*/
