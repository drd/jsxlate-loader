var jsxlate = require('jsxlate');

module.exports = function(src) {
    return jsxlate.translator.transformMessageNodes(src);
};