
(function ($, window) {
  'use strict';

  $(window).on({

    /**
     * Bind only one event to take care of calling all scroll callbacks.
     *
     * @ignore
     */
    'scroll.MaterialTableHeader': materialDesignTableheader
  });

  /**
   * Style dynamically attached sticky table header.
   */
  function materialDesignTableheader() {
    var $stickyHeader = $('.sticky-header');
    if ($stickyHeader.length > 0) {
      $stickyHeader.addClass('mdl-data-table mdl-shadow--2dp');
      // The checkbox has been cloned, so it was not upgraded yet. We need to do
      // that manually:
      var checkbox = $stickyHeader.find('th.select-all .mdl-checkbox').removeClass('is-upgraded').attr({
        'data-upgraded': ''
      });
      window.componentHandler.upgradeElement(checkbox[0]);
      $(window).off('scroll.MaterialTableHeader');
    }
  }
})(jQuery, this);
