'use strict'

class Dish{

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }

  _setName(name) {
    this.name = name;
  }

  _setPrice(price) {
    this.price = price;
  }

}