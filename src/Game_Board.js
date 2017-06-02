/*global $*/

/**
 * Class representing the game board for Triple Triad.
 * Calls [initialize]{@link Panda.TripleTriad.Game_Board#initialize}
 * with given arguments.
 *
 * @class Game_Board
 * @memberof Panda.TripleTriad
 */
$.Game_Board = function() {
	this.initialize.apply(this, arguments);
};

Object.defineProperties($.Game_Board.prototype, {
	/**
	 * The amount of slots in the game board. Defined by columns times rows.
	 * @name Panda.TripleTriad.Game_Board#size
	 * @type Number
	 * @readonly
	 */
	size: {
		get: function() {
			return this._columns * this._rows;
		},

		configurable: true
	},

	/**
	 * The card slots int the game board.
	 * @name Panda.TripleTriad.Game_Board#slots
	 * @type Panda.TripleTriad.Game_CardSlot[]
	 * @readonly
	 */
	slots: {
		get: function() {
			return this._slots;
		},

		configurable: true
	}
});

/**
 * Constructor of the {@link Panda.TripleTriad.Game_Board} class.
 *
 * @function initialize
 * @memberof Panda.TripleTriad.Game_Board.prototype
 *
 * @param {Object} params The constructor params for the object.
 * @param {Number} [params.columns=3] The number of card slots columns.
 * @param {Number} [params.rows=3] The number of card slots rows.
 *
 * @returns {void}
 */
$.Game_Board.prototype.initialize = function(params) {
	var _params = params || {};

	this._columns = _params.columns || 3;
	this._rows = _params.rows || 3;

	this._slots = Array.apply(null, Array(this.size)).map(function() {
		return null;
	});
};

/**
 * Checks if all of game board slots are full.
 * @function isFull
 * @memberof Panda.TripleTriad.Game_Board.prototype
 * @returns {Boolean} If the game board is full.
 */
$.Game_Board.prototype.isFull = function() {
	return this._slots.indexOf(null) === -1;
};
