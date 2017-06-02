/*global Panda, Imported*/

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
