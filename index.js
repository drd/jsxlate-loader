var jsxlate = require('jsxlate');
var cache = jsxlate.cache;

module.exports = function(src) {
    this.cacheable();
    var cacheKey = this.resource;
    var resourceMtime = cache.mtime(this.resource);

    try {
        var result;
        var cached = cache.cache[cacheKey];
        if (cached && cached.mtime === resourceMtime) {
            result = cached;
        } else {
            result = {
                mtime: resourceMtime,
                transformed: jsxlate.translator.transformMessageNodes(src)
            };
            cache.cache[cacheKey] = result;
            cache.save()
        }
        return result.transformed;
    } catch(e) {
        var message = "Error transforming " + this.resource;
        console.error(message);
        console.error(e.toString());
        var originalMessage = e.toString();
        e.toString = function() { return message + " (Original exception: " + originalMessage + ")"; };
        throw e;
    }
};
