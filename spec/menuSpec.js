'use strict';

describe('Menu', function(){

  var menu;
  var dish = {name: 'Pizza', price: 10};
  var dish2 = {name: 'Parmo', price: 12};

  beforeEach(function(){
    menu = new Menu;
  });

  describe('.dishes', function(){
    it('has an empty collection of dishes', function(){
      expect(menu.dishes).toEqual([]);
    });
  });

  describe('.addDish(dish)', function(){
    it('adds a dish to the menu', function(){
      menu.addDish(dish);
      expect(menu.dishes).toContain(dish);
    });
  }); 
  
  describe('.removeDish', function(){
    it('removes a dish from the menu using the dishes name', function(){
      menu.addDish(dish);
      menu.addDish(dish2);
      expect(menu.dishes).toContain(dish);
      expect(menu.dishes).toContain(dish2);
      menu.removeDish('Pizza');
      expect(menu.dishes).not.toContain(dish);
    });
  });
});