/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var parse = require('cjs-query').parse;


/**
 * Determine application referrer.
 * If no referrer - return false.
 *
 * @return {string|boolean} referrer url or false
 *
 * @example
 * location.href = referrer() || 'http://google.com/';
 */
module.exports = function () {
    var queryParams = parse(location.search.substring(1));

    if ( queryParams.referrer ) {
        // referrer in GET
        return decodeURIComponent(queryParams.referrer);
    }

    if ( document.referrer ) {
        // if in app was used location.reload method, document.referrer === app link, and must return false
        if ( location.href.split('#')[0] === document.referrer ) {
            return false;
        }

        return document.referrer;
    }

    return false;
};
