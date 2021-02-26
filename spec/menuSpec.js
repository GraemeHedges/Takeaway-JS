'use strict';

describe('Menu', function(){

  var menu;

  beforeEach(function(){
    menu = new Menu;
  });

  describe('.getDishes', function(){
    it('has an empty collection of dishes', function(){
      expect(menu.getDishes()).toEqual([]);
    });
  });


});