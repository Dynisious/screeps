"use strict";
module.exports = (iter) => {
    const iterable = iter[Symbol.iterator]();
    let cache = null;
    return {
        peek: () => {
            if (cache === null)
                cache = iterable.next();
            return cache;
        },
        next: () => {
            if (cache === null)
                return iterable.next();
            const res = cache;
            cache = null;
            return res;
        }
    };
};
//# sourceMappingURL=utils.js.map