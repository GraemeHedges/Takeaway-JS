'use strict';

describe('Dish', function(){

  var dish;

  beforeEach(function(){
    dish = new Dish('Pizza', 10);
  });

  describe('.name', function(){
    it('returns the name of the dish', function(){
      expect(dish.getName()).toEqual('Pizza');
    });
  });

  describe('.getprice', function(){
    it('returns the price of the dish', function(){
      expect(dish.getPrice()).toEqual(10);
    });
  });

  describe('._setName', function(){
    it('allows the dishes name to be changed', function(){
      dish._setName('Pineapple Pizza');
      expect(dish.getName()).toEqual('Pineapple Pizza');
    });
  })

  describe('._setPrice', function(){
    it('allows the dishes price to be changed', function(){
      dish._setPrice(15);
      expect(dish.getPrice()).toEqual(15);
    });
  });

});