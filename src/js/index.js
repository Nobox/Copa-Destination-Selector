var $ = require('jquery');

class CopaairDestSelect {
    $dialog = $('.js-copaair-dest-select-dialog');
    $valueInputs = {
        'origin': $('.js-copaair-dest-select-value-origin'),
        'destination': $('.js-copaair-dest-select-value-destination')
    };
    $activeInput = null;

    init() {
        this.events();
    }

    openDialog() {
        this.$dialog.removeClass('copaair-hidden');
    }

    closeDialog() {
        this.$dialog.addClass('copaair-hidden');
    }

    populateDestination(value) {
        this.$activeInput.val(value);
    }

    populateDestinationCode(code) {
        var destinationType = this.$activeInput.data('value-type');
        this.$valueInputs[destinationType].each(function() {
            $(this).val(code);
        });
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

            this.populateDestination('');
            this.closeDialog();
        });

        this.$dialog.on('click.copaair', 'a', (e) => {
            e.preventDefault();
            var $this = $(e.target);

            this.populateDestination($this.text());
            this.populateDestinationCode($this.data('code'));
            this.closeDialog();
        });

    }

}

var destSelect = new CopaairDestSelect();
destSelect.init();
