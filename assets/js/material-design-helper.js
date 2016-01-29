/**
 * Date: 14.10.15
 * Time: 21:21
 * @file
 *
 */


(function ($, window) {
  'use strict';

  /**
   * Upgrade all components.
   */
  Drupal.behaviors.materialDesignHelper = {
    attach: function (context) {
      window.componentHandler.upgradeAllRegistered();
    }
  };

})(jQuery, this);
