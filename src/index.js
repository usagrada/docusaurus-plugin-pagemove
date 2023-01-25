const path = require("path");

module.exports = function () {
  return {
    name: "keydown pagenation",
    getClientModules() {
      return [path.join(__dirname, "plugin.js")];
    },
  };
};
