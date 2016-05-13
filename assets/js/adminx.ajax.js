(function ($, window) {
  'use strict';
  /**
   * Sets the throbber progress indicator.
   */
  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $('<div class="ajax-progress ajax-progress-spinner"><div class="mdl-spinner mdl-js-spinner is-active"></div></div>');
    $(this.element).after(this.progress.element);
    window.componentHandler.upgradeAllRegistered();
  };

})(jQuery, this);
