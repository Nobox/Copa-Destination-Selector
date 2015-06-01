(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null);

var CopaairDestSelect = (function () {
    function CopaairDestSelect() {
        _classCallCheck(this, CopaairDestSelect);

        this.$dialog = $('.js-copaair-dest-select-dialog');
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
        value: function closeDialog(valueText) {
            this.$dialog.addClass('copaair-hidden');
            this.populateDestination(valueText);
        }
    }, {
        key: 'populateDestination',
        value: function populateDestination(value) {
            this.$activeInput.val(value);
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
                _this.closeDialog();
            });

            this.$dialog.on('click.copaair', 'a', function (e) {
                e.preventDefault();
                var $this = $(e.target);

                _this.closeDialog($this.text());
            });
        }
    }]);

    return CopaairDestSelect;
})();

var destSelect = new CopaairDestSelect();
destSelect.init();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS92YWdyYW50L0NvZGUvY29wYS9jb3BhLWRlc3RpbmF0aW9uLXNlbGVjdG9yL3NyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQSxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7O0lBRXBCLGlCQUFpQjthQUFqQixpQkFBaUI7OEJBQWpCLGlCQUFpQjs7YUFDbkIsT0FBTyxHQUFHLENBQUMsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUM3QyxZQUFZLEdBQUcsSUFBSTs7O2lCQUZqQixpQkFBaUI7O2VBSWYsZ0JBQUc7QUFDSCxnQkFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2pCOzs7ZUFFUyxzQkFBRztBQUNULGdCQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzlDOzs7ZUFFVSxxQkFBQyxTQUFTLEVBQUU7QUFDbkIsZ0JBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDeEMsZ0JBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN2Qzs7O2VBRWtCLDZCQUFDLEtBQUssRUFBRTtBQUN2QixnQkFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7OztlQUVLLGtCQUFHOzs7QUFDTCxnQkFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLGlDQUFpQyxDQUFDO2dCQUMvQyxLQUFLLEdBQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDMUMsT0FBTyxHQUFJLENBQUMsQ0FBQywrQkFBK0IsQ0FBQyxDQUNoRDs7O0FBR0Qsb0JBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFVBQVMsQ0FBQyxFQUFFO0FBQy9DLG9CQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNmLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztvQkFDckMsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQy9COztBQUVELHFCQUFLLENBQ0EsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLENBQzdDLElBQUksQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7O0FBRXBDLHFCQUFLLENBQ0EsUUFBUSxDQUFDLGdDQUFnQyxDQUFDLENBQzFDLElBQUksQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUM7O0FBRW5DLHVCQUFPLENBQ0YsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQzFCLElBQUksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7O0FBRWpDLHlCQUFTLENBQ0osV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQzdCLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDckMsQ0FBQyxDQUFDOztBQUVILGFBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLCtCQUErQixFQUFFLFVBQUMsQ0FBQyxFQUFLO0FBQ3BFLHNCQUFLLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hDLHNCQUFLLFVBQVUsRUFBRSxDQUFDO2FBQ3JCLENBQUMsQ0FBQzs7QUFFSCxnQkFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLCtCQUErQixFQUFFLFVBQUMsQ0FBQyxFQUFLO0FBQ3JFLGlCQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbkIsc0JBQUssV0FBVyxFQUFFLENBQUM7YUFDdEIsQ0FBQyxDQUFDOztBQUVILGdCQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFLFVBQUMsQ0FBQyxFQUFLO0FBQ3pDLGlCQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbkIsb0JBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRXhCLHNCQUFLLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUNsQyxDQUFDLENBQUM7U0FFTjs7O1dBcEVDLGlCQUFpQjs7O0FBd0V2QixJQUFJLFVBQVUsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7QUFDekMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5cbmNsYXNzIENvcGFhaXJEZXN0U2VsZWN0IHtcbiAgICAkZGlhbG9nID0gJCgnLmpzLWNvcGFhaXItZGVzdC1zZWxlY3QtZGlhbG9nJyk7XG4gICAgJGFjdGl2ZUlucHV0ID0gbnVsbDtcblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XG4gICAgfVxuXG4gICAgb3BlbkRpYWxvZygpIHtcbiAgICAgICAgdGhpcy4kZGlhbG9nLnJlbW92ZUNsYXNzKCdjb3BhYWlyLWhpZGRlbicpO1xuICAgIH1cblxuICAgIGNsb3NlRGlhbG9nKHZhbHVlVGV4dCkge1xuICAgICAgICB0aGlzLiRkaWFsb2cuYWRkQ2xhc3MoJ2NvcGFhaXItaGlkZGVuJyk7XG4gICAgICAgIHRoaXMucG9wdWxhdGVEZXN0aW5hdGlvbih2YWx1ZVRleHQpO1xuICAgIH1cblxuICAgIHBvcHVsYXRlRGVzdGluYXRpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy4kYWN0aXZlSW5wdXQudmFsKHZhbHVlKTtcbiAgICB9XG5cbiAgICBldmVudHMoKSB7XG4gICAgICAgIHZhciAkdGFibGlzdCA9ICQoJy5qcy1jb3BhYWlyLWRlc3Qtc2VsZWN0LXRhYmxpc3QnKSxcbiAgICAgICAgICAgICR0YWJzICAgID0gJHRhYmxpc3QuZmluZCgnbGlbcm9sZT1cInRhYlwiXScpLFxuICAgICAgICAgICAgJHBhbmVscyAgPSAkKCcuanMtY29wYWFpci1kZXN0LXNlbGVjdC1wYW5lbCcpXG4gICAgICAgIDtcblxuICAgICAgICAvLyBUYWIgY2xpY2sgZXZlbnQgdG8gc2hvdyBwYW5lbFxuICAgICAgICAkdGFibGlzdC5vbignY2xpY2snLCAnbGlbcm9sZT1cInRhYlwiXScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgcGFuZWxJZCA9ICR0aGlzLmF0dHIoJ2FyaWEtY29udHJvbHMnKSxcbiAgICAgICAgICAgICAgICAkdGFicGFuZWwgPSAkKCcjJyArIHBhbmVsSWQpXG4gICAgICAgICAgICA7XG5cbiAgICAgICAgICAgICR0YWJzXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdjb3BhYWlyLWRlc3Qtc2VsZWN0LXRhYi1hY3RpdmUnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICR0aGlzXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdjb3BhYWlyLWRlc3Qtc2VsZWN0LXRhYi1hY3RpdmUnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcblxuICAgICAgICAgICAgJHBhbmVsc1xuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnY29wYWFpci1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAgICAgICAgICR0YWJwYW5lbFxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnY29wYWFpci1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignZm9jdXMuY29wYWFpcicsICcuanMtY29wYWFpci1kZXN0LXNlbGVjdC1pbnB1dCcsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRhY3RpdmVJbnB1dCA9ICQoZS50YXJnZXQpO1xuICAgICAgICAgICAgdGhpcy5vcGVuRGlhbG9nKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGRpYWxvZy5vbignY2xpY2suY29wYWFpcicsICcuanMtY29wYWFpci1kZXN0LXNlbGVjdC1jbG9zZScsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlRGlhbG9nKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGRpYWxvZy5vbignY2xpY2suY29wYWFpcicsICdhJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQoZS50YXJnZXQpO1xuXG4gICAgICAgICAgICB0aGlzLmNsb3NlRGlhbG9nKCR0aGlzLnRleHQoKSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG5cbnZhciBkZXN0U2VsZWN0ID0gbmV3IENvcGFhaXJEZXN0U2VsZWN0KCk7XG5kZXN0U2VsZWN0LmluaXQoKTtcbiJdfQ==
