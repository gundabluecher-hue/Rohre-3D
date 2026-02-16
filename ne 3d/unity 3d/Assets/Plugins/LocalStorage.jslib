mergeInto(LibraryManager.library, {
  LoadWebSettings: function () {
    try {
      var key = "mini-curve-fever-3d.settings.v3";
      var settings = window.localStorage.getItem(key);
      if (!settings) {
        return 0;
      }

      var bufferSize = lengthBytesUTF8(settings) + 1;
      var buffer = _malloc(bufferSize);
      stringToUTF8(settings, buffer, bufferSize);
      return buffer;
    } catch (e) {
      return 0;
    }
  },

  SaveWebSettings: function (jsonParams) {
    try {
      var key = "mini-curve-fever-3d.settings.v3";
      var value = UTF8ToString(jsonParams);
      window.localStorage.setItem(key, value);
    } catch (e) {
      // Ignore browser persistence errors.
    }
  },

  FreeWebBuffer: function (ptr) {
    if (ptr) {
      _free(ptr);
    }
  }
});
