jQuery.propHooks.checked = {
  set: function (elem, value, name) {
    'use strict';
    var ret = (elem[name] = value);
    var evt = document.createEvent('HTMLEvents');
    evt.initEvent('change', false, true);
    elem.dispatchEvent(evt);
    return ret;
  }
};
