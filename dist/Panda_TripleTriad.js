/*:
 * @plugindesc Recreates the Triple Triad minigame in RPG Maker.
 * @author Kyo Panda
 */

(function() {
	'use strict';

	/**
	 * Defines the global scope for browser.
	 * @ignore
	 */
	var global = typeof window !== 'undefined' ? window : {};

	/**
	 * Namespace used conventionally for importing plugins.
	 * @namespace Imported
	 * @type {Object}
	 */
	var Imported = global.Imported || {};

	/**
	 * The Triple Triad reference of Imported namespace.
	 * @name Imported#Panda_TripleTriad
	 * @type {Boolean}
	 */
	Imported.Panda_TripleTriad = true;

	/**
	 * Namespace used to hold Panda's plugins.
	 * @namespace Panda
	 * @type {Object}
	 */
	var Panda = global.Panda || {};

	/**
	 * The Triple Triad's plugin namespace.
	 * @namespace Panda.TripleTriad
	 * @memberof Panda
	 * @type {Object}
	 */
	Panda.TripleTriad = Panda.TripleTriad || {};

	/**
	 * The Triple Triad's plugin version.
	 * @name Panda.TripleTriad#version
	 * @type {String}
	 */
	Panda.TripleTriad.version = '1.0.0-beta';

	/**
	 * @ignore
	 */
	var $ = Panda.TripleTriad;

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

	/**
	 * Default export.
	 */
	global.Panda = Panda;
	global.Imported = Imported;

	if (typeof module !== 'undefined' && module.exports) {
		/**
		 * Module export for unit testing.
		 * @exports Panda
		 * @ignore
		 */
		module.exports = Panda;
	}
}());
