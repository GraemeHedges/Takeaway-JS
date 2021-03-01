'use strict'
 
class Menu {

  constructor() {
    this.dishes = []
  }

  getDishes() {
    return this.menu;
  }

  addDish(dish) {
    this.dishes.push(dish)
  }

  dish(dish) {
    if (this.isOnTheMenu(dish)) {
    return this.dishes.find(item => item.name === dish)
    } throw new Error(`Sorry, ${dish} is not on the menu`)
  }

  removeDish(dish) {
    this.dishes = this.dishes.filter(item => item.name !== dish)
  }

  isOnTheMenu(dish){
    if (this.dishes.find(item => item.name === dish)) {
      return true
    } return false
  }
}
