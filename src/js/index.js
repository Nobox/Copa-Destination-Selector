var $ = require('jquery');

class CopaairDestSelect {
    $dialog = $('.js-copaair-dest-select-dialog');
    $activeInput = null;

    init() {
        this.events();
    }

    openDialog() {
        this.$dialog.removeClass('copaair-hidden');
    }

    closeDialog(valueText) {
        this.$dialog.addClass('copaair-hidden');
        this.populateDestination(valueText);
    }

    populateDestination(value) {
        this.$activeInput.val(value);
    }

    events() {
        var $tablist = $('.js-copaair-dest-select-tablist'),
            $tabs    = $tablist.find('li[role="tab"]'),
            $panels  = $('.js-copaair-dest-select-panel')
        ;

        // Tab click event to show panel
        $tablist.on('click', 'li[role="tab"]', function(e) {
            var $this = $(this),
                panelId = $this.attr('aria-controls'),
                $tabpanel = $('#' + panelId)
            ;

            $tabs
                .removeClass('copaair-dest-select-tab-active')
                .attr('aria-selected', 'false');

            $this
                .addClass('copaair-dest-select-tab-active')
                .attr('aria-selected', 'true');

            $panels
                .addClass('copaair-hidden')
                .attr('aria-hidden', 'true');

            $tabpanel
                .removeClass('copaair-hidden')
                .attr('aria-hidden', 'false');
        });

        $(document).on('focus.copaair', '.js-copaair-dest-select-input', (e) => {
            this.$activeInput = $(e.target);
            this.openDialog();
        });

        this.$dialog.on('click.copaair', '.js-copaair-dest-select-close', (e) => {
            e.preventDefault();
            this.closeDialog();
        });

        this.$dialog.on('click.copaair', 'a', (e) => {
            e.preventDefault();
            var $this = $(e.target);

            this.closeDialog($this.text());
        });

    }

}

var destSelect = new CopaairDestSelect();
destSelect.init();
