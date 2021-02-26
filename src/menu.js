'use strict';
 
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

  removeDish(dish) {
    this.dishes = this.dishes.filter(function(item) {
      return item.name !== dish
    })
  }
}