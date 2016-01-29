(function ($, window) {
  'use strict';

  /**
   * Upgrade all components.
   */
  Drupal.behaviors.materialDesignTable = {
    attach: function (context) {
      var $selectAllCell = $(context).find('th.select-all');
      var $checkboxMarkup = $('<label>')
          .addClass('mdl-checkbox mdl-js-checkbox mdl-js-checkbox-ripple-effect');
      $selectAllCell.once('upgradeSelectAllCheckbox').each(function () {
        var $selectAllCheckbox = $(this).find('input[type="checkbox"]').addClass('mdl-checkbox__input');
        $checkboxMarkup.append($selectAllCheckbox);
        $(this).append($checkboxMarkup);
      });
    }
  };
})(jQuery, this);
