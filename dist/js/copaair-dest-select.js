(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

var CopaairDestSelect = (function () {
    function CopaairDestSelect() {
        _classCallCheck(this, CopaairDestSelect);

        this.$dialog = $('.js-copaair-dest-select-dialog');
        this.$valueInputs = {
            'origin': $('.js-copaair-dest-select-value-origin'),
            'destination': $('.js-copaair-dest-select-value-destination')
        };
        this.$activeInput = null;
    }

    _createClass(CopaairDestSelect, [{
        key: 'init',
        value: function init() {
            this.events();
        }
    }, {
        key: 'openDialog',
        value: function openDialog() {
            this.$dialog.removeClass('copaair-hidden');
        }
    }, {
        key: 'closeDialog',
        value: function closeDialog() {
            this.$dialog.addClass('copaair-hidden');
        }
    }, {
        key: 'populateDestination',
        value: function populateDestination(value) {
            this.$activeInput.val(value);
        }
    }, {
        key: 'populateDestinationCode',
        value: function populateDestinationCode(code) {
            var destinationType = this.$activeInput.data('value-type');
            this.$valueInputs[destinationType].each(function () {
                $(this).val(code);
            });
        }
    }, {
        key: 'events',
        value: function events() {
            var _this = this;

            var $tablist = $('.js-copaair-dest-select-tablist'),
                $tabs = $tablist.find('li[role="tab"]'),
                $panels = $('.js-copaair-dest-select-panel');

            // Tab click event to show panel
            $tablist.on('click', 'li[role="tab"]', function (e) {
                var $this = $(this),
                    panelId = $this.attr('aria-controls'),
                    $tabpanel = $('#' + panelId);

                $tabs.removeClass('copaair-dest-select-tab-active').attr('aria-selected', 'false');

                $this.addClass('copaair-dest-select-tab-active').attr('aria-selected', 'true');

                $panels.addClass('copaair-hidden').attr('aria-hidden', 'true');

                $tabpanel.removeClass('copaair-hidden').attr('aria-hidden', 'false');
            });

            $(document).on('focus.copaair', '.js-copaair-dest-select-input', function (e) {
                _this.$activeInput = $(e.target);
                _this.openDialog();
            });

            this.$dialog.on('click.copaair', '.js-copaair-dest-select-close', function (e) {
                e.preventDefault();

                _this.populateDestination('');
                _this.closeDialog();
            });

            this.$dialog.on('click.copaair', 'a', function (e) {
                e.preventDefault();
                var $this = $(e.target);

                _this.populateDestination($this.text());
                _this.populateDestinationCode($this.data('code'));
                _this.closeDialog();
            });
        }
    }]);

    return CopaairDestSelect;
})();

var destSelect = new CopaairDestSelect();
destSelect.init();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
