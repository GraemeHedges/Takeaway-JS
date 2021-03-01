'use strict'

class Order {

  constructor() {
    this.order = []
  }

  addToOrder(dish) {
    this.order.push(dish)
  }

  removeFromOrder(dish) {
    this.order = this.order.filter(item => item.name !== dish)
  }
}
