'use strict';

describe('Order', function(){

  var order;

  var dish = {name: 'Pizza', price: 10};
  var dish2 = {name: 'Parmo', price: 12};
  var menu = {dishes: [dish, dish2]};

  beforeEach(function(){
    order = new Order();
  });

  describe('A new order has a blank order', function(){
    it('has no items in the order', function(){
      expect(order.order).toEqual([]);
    });
  });

  describe('.addToOrder', function(){
    it('adds an item from the menu to the order', function(){
      order.addToOrder(dish);
      expect(order.order).toContain(dish);
      expect(order.order).not.toContain(dish2);
      order.addToOrder(dish2);
      expect(order.order).toContain(dish2);
    });
  });
  
  describe('.removeFromOrder', function(){
    it('removes an item from the order', function(){
      order.addToOrder(dish);
      order.addToOrder(dish2);
      expect(order.order).toContain(dish);
      expect(order.order).toContain(dish2);

      order.removeFromOrder(dish.name);
      expect(order.order).not.toContain(dish);
      expect(order.order).toContain(dish2);
      
      order.removeFromOrder(dish2.name);
      expect(order.order).not.toContain(dish2);
    })
  })

});
