/**
 * Date: 14.10.15
 * Time: 21:21
 * @file
 *
 */


(function ($, window) {
  'use strict';

  /**
   * Allows submit buttons in entity forms to trigger uploads by undoing
   * work done by Drupal.behaviors.fileButtons.
   */
  Drupal.behaviors.materialDesignHelper = {
    attach: function (context) {
      window.componentHandler.upgradeAllRegistered();
    }
  };

})(jQuery, this);
