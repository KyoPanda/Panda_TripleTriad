/*global $*/

'use strict';

/**
 * Defines the global scope for browser.
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
