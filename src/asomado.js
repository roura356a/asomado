/**
 * asomado 1.0.4
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

    var registerIsVisibleByClass = function (elementClass, options) {
        var elementsAsomados = document.querySelectorAll('.' + elementClass);
        for (var i = 0; i < elementsAsomados.length; ++i) {
            registerIsVisible(elementsAsomados[i], options);
        }
    };
    var registerIsVisible = function (element, options) {
        if (_isVisible(element)) {
            whenAsomado(element, options);
        } else {
            var prepareWhenVisible = _prepareWhenVisible(element, options);

            if (window.addEventListener) {
                window.addEventListener('scroll', prepareWhenVisible, false);
            } else {
                window.attachEvent('onscroll', prepareWhenVisible);
            }
        }
    };
    var _addClass = function (element, classname) {
        var currentClassList = (element.className || '').split(/\s+/);
        currentClassList.push(currentClassList.indexOf(classname) > -1 ? '' : classname);
        element.className = currentClassList.join(' ').trim();
    };
    var whenAsomado = function (element, options) {
        _addClass(element, options.classWhenVisible);
    };
    var _isVisible = function (element) {
        var windowInnerHeight = window.innerHeight || document.documentElement.clientHeight;

        return element.getBoundingClientRect().top - windowInnerHeight <= 0;
    };
    var _prepareWhenVisible = function (element, options) {
        var scrollEventCallback = function (e) {
            if (_isVisible(element)) {
                whenAsomado(element, options);

                if (window.removeEventListener) {
                    window.removeEventListener(e.type, scrollEventCallback, false);
                } else {
                    window.detachEvent('on' + e.type, scrollEventCallback);
                }
            }
        };

        return scrollEventCallback;
    };

    return {
        whenAsomado: whenAsomado,
        registerIsVisible: registerIsVisible,
        registerIsVisibleByClass: registerIsVisibleByClass
    };
}));
