/**
 * Date: 01.02.16
 * Time: 10:15
 * @file
 *
 */
(function ($, window) {
  'use strict';

  /**
   * Improvements for front-end form validation.
   */
  Drupal.behaviors.validationImprovements = {
    attach: function (context) {
      var invalidFired = false;
      $('form input').once('validation-improvements').on('invalid', function () {
        // @todo: fix for invisible elements that are not fousable due to the
        // fact that they are hidden in a vertical or horizontal tabs pane.
        if ($(this).closest('.vertical-tabs__pane, .horizontal-tabs-pane').length > 0) {
          var tabsPaneID = $(this).closest('.vertical-tabs__pane, .horizontal-tabs-pane').attr('id');
          $('a[href="#' + tabsPaneID + '"]').click();
        }
        // If the admin toolbar is visible we need to correct the scroll offset
        // for invalid elements.
        if ($('body').hasClass('toolbar-horizontal') && !invalidFired) {
          $('html, body').animate({
            scrollTop: $(this).offset().top - 100
          }, 200);

        }
        // We only want to scroll once, so we scroll to the first invalid
        // element and then prevent all other scroll actions.
        invalidFired = true;
      });
    }
  };

})(jQuery, this);
