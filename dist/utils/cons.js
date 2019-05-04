"use strict";
(() => {
    const DONE = { done: true };
    const cons = (head, rest) => (selector) => selector(head, rest);
    const get_head = (head, _) => head;
    const head = (cons) => cons(get_head);
    const get_rest = (_, rest) => rest;
    const rest = (cons) => (cons === null) ? null : cons(get_rest);
    const one = (head) => cons(head, null);
    const from_list = (arr) => append(arr, null);
    const iterate = (cons) => {
        const peek = () => (cons === null) ? DONE : { value: head(cons), done: false, };
        const next = () => {
            const res = peek();
            if (!res.done)
                cons = rest(cons);
            return res;
        };
        return { peek, next, };
    };
    const concat = (left, right) => (left === null) ? right : cons(head(left), concat(rest(left), right));
    const append = (left, right) => {
        let list = null;
        for (let i = left.length; i >= 0; i -= 1)
            list = cons(left[i], list);
        return list;
    };
    const map = (list, f) => (list === null) ? null : cons(f(head(list)), map(rest(list), f));
    module.exports = { cons, head, rest, one, from_list, iterate, concat, append, map, };
})();
//# sourceMappingURL=cons.js.map