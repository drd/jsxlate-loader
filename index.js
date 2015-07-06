var jsxlate = require('jsxlate');

module.exports = function(src) {
    this.cacheable();
    try {
        return jsxlate.translator.transformMessageNodes(src);
    } catch(e) {
        var message = "Error transforming " + this.resource;
        console.error(message);
        console.error(e.toString());
        var originalMessage = e.toString();
        e.toString = function() { return message + " (Original exception: " + originalMessage + ")"; };
        throw e;
    }
};
