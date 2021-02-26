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

  describe('A single item menu', function(){  

    beforeEach(function(){
      menu.addDish(dish);
    });

    describe('isOnTheMenu', function(){
      it('returns true if a dish is on the menu, false if it is not', function(){
        expect(menu.isOnTheMenu('Pizza')).toBe(true)
        expect(menu.isOnTheMenu('Parmo')).toBe(false)
        menu.addDish(dish2)
        expect(menu.isOnTheMenu('Parmo')).toBe(true)
      })
    })

    describe('.dish', function(){
      it('returns a specific dish from the menu by name', function(){
        expect(menu.dish('Pizza')).toEqual(dish);
      });
    });
  
    describe('.removeDish', function(){
      it('removes a dish from the menu using the dishes name', function(){
        expect(menu.dishes).toContain(dish);
        menu.removeDish('Pizza');
        expect(menu.dishes).not.toContain(dish);
      });
    });
  });
});