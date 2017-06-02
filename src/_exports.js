/*global Panda, Imported*/

if (typeof module !== 'undefined' && module.exports) {
	/**
	 * Module export for unit testing.
	 * @exports Panda
	 */
	module.exports = Panda;
} else {
	/**
	 * Default export.
	 */
	window.Panda = Panda;
	window.Imported = Imported;
}