/*global jasmine, describe, expect, it*/

var Panda = require('../dist/Panda_TripleTriad.js');

describe('Game_Board', function() {
	var $ = Panda.TripleTriad;

	var board = new $.Game_Board();

	it('is istantiated', function() {
		expect(board).toBeDefined();
		expect(board).toEqual(jasmine.any($.Game_Board));
	});

	it('is filling', function() {
		expect(board.slots).toEqual(jasmine.any(Array));
		expect(board.slots[0]).toBe(null);
		expect(board.isFull()).toBe(false);

		for (var i = 0; i < board.slots.length; i++) {
			board.slots[i] = true;
		}

		expect(board.isFull()).toBe(true);
	});
});
