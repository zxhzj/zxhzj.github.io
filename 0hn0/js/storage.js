var Storage = new (function() {

  function getItem(name, cb) {
    if ($.browser.chromeWebStore) {
      chrome.storage.local.get(name, cb);
    }
    else {
      var result = {};
      result[name] = localStorage.getItem(name);
      cb(result);
    }
  }

  function setItem(name, value, cb) {
    if ($.browser.chromeWebStore) {
      var command = {};
      command[name] = value;
      chrome.storage.local.set(command, cb);
    }
    else {
      localStorage.setItem(name, value);
      if (cb)
        cb();
    }
  }

  function clear(cb) {
    if ($.browser.chromeWebStore)
      chrome.storage.local.clear(cb);
    else {
      localStorage.clear();
      if (cb)
        cb();
    }
  }

  this.getItem = getItem;
  this.setItem = setItem;
  this.clear = clear;
})();