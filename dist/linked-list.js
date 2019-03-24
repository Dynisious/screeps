"use strict";
(() => {
    const { maybe } = require('result');
    const node = (value, next) => ({
        value,
        next: next === undefined ? null : next
    });
    module.exports = (list) => {
        let head = null;
        let tail = null;
        let length = 0;
        const linked = {
            head: () => head === null ? maybe() : maybe(head.value),
            tail: () => tail === null ? maybe() : maybe(tail.value),
            length: () => length,
            push_front: (value) => {
                length += 1;
                if (length === 1) {
                    head = node(value);
                    tail = head;
                }
                else {
                    head = node(value);
                }
            },
            push_back: (value) => {
                length += 1;
                if (length === 1) {
                    head = node(value);
                    tail = head;
                }
                else {
                    tail.next = node(value);
                    tail = tail.next;
                }
            },
            pop_front: () => {
                if (head === null)
                    return maybe();
                length -= 1;
                if (length === 0)
                    tail = null;
                const { value, next } = head;
                head = next;
                return maybe(value);
            },
            [Symbol.iterator]: () => {
                const iter = {};
                const next = (ptr) => () => {
                    if (ptr === null)
                        return { done: true };
                    iter.next = next(ptr.next);
                    return { value: ptr.value };
                };
                iter.next = next(head);
                return iter;
            }
        };
        if (list !== undefined)
            for (const item of list)
                linked.push_back(item);
        return linked;
    };
})();
//# sourceMappingURL=linked-list.js.map