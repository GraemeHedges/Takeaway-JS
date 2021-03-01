'use strict';

describe('Dish', function(){

  var dish;

  beforeEach(function(){
    dish = new Dish('Pizza', 10);
  });

  describe('.name', function(){
    it('returns the name of the dish', function(){
      expect(dish.name).toEqual('Pizza');
    });
  });

  describe('.price', function(){
    it('returns the price of the dish', function(){
      expect(dish.price).toEqual(10);
    });
  });

  describe('._setName', function(){
    it('allows the dishes name to be changed', function(){
      dish._setName('Pineapple Pizza');
      expect(dish.name).toEqual('Pineapple Pizza');
    });
  })

  describe('._setPrice', function(){
    it('allows the dishes price to be changed', function(){
      dish._setPrice(15);
      expect(dish.price).toEqual(15);
    });
  });
});
