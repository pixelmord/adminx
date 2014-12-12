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
      $('body').click(function(){
        console.log('my-click');
        setTimeout(function() {
          if ($('body > .ui-dialog').length || $('#modalContent').length) {
            $('html').addClass('modal-active');
          }
          else {
            $('html').removeClass('modal-active');
          }
        }, 500);
      });
    }
  };

})(jQuery);
