"use strict";
(() => {
    const peek = (iter) => {
        let cache = null;
        const next = iter.next;
        iter.next = () => {
            if (cache === null)
                return next();
            const res = cache;
            cache = null;
            return res;
        };
        iter.peek = () => {
            if (cache === null)
                cache = next();
            return cache;
        };
        return iter;
    };
    const map = (iter, map) => {
        const next = iter.next;
        iter.next = () => {
            const res = next();
            if (res.value !== undefined)
                res.value = map(res.value);
            return res;
        };
        return iter;
    };
    const filter = (iter, filter) => {
        const next = iter.next;
        const filter_next = () => {
            const res = next();
            if (res.value !== undefined && !filter(res.value))
                return filter_next();
            return res;
        };
        iter.next = filter_next;
        return iter;
    };
    const filter_map = (iter, filter) => {
        const next = iter.next;
        const filter_next = () => {
            const res = next();
            if (res.value !== undefined) {
                const mapped = filter(res.value);
                if (mapped !== null)
                    res.value = mapped;
                else
                    return filter_next();
            }
            return res;
        };
        iter.next = filter_next;
        return iter;
    };
    module.exports = { peek, map, filter, filter_map, };
})();
//# sourceMappingURL=iterators.js.map