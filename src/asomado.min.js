/**
 * asomado 1.0.0
 * Repo: https://github.com/roura356a/asomado
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.Asomado = factory();
    }
}(this, function () {
    'use strict';

    // TODO: var functions

    return {
        whenAsomado: whenAsomado,
        registerIsVisible: registerIsVisible,
        registerIsVisibleByClass: registerIsVisibleByClass
    };
}));
