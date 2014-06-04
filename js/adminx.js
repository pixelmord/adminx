(function ($) {
  'use strict';
  Drupal.behaviors.adminx = {
    attach: function (context, settings) {
      var filterInput = $('input[name="module_filter[name]"]', context);
      if(filterInput.length) {
        filterInput.attr({
          'placeholder': Drupal.t('filter by name'),
          'autofocus': 'autofocus'
        });
      }
    }
  };

})(jQuery);
