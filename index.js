var jsxlate = require('jsxlate');

module.exports = function(src) {
    this.cacheable();
    return jsxlate.translator.transformMessageNodes(src);
};