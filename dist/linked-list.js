"use strict";
(() => {
    const node = (value, next = null) => ({
        value,
        next
    });
    module.exports = (list) => {
        let head = null;
        let tail = null;
        let length = 0;
        return {
            length: () => length,
            push_front: (value) => {
                length += 1;
                if (length === 1) {
                    head = node(value);
                    tail = head;
                }
                else {
                    head = node(value, head);
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
                if (head === null) {
                    return null;
                }
                length -= 1;
                if (length === 0) {
                    tail = null;
                }
                const { value, next } = head;
                head = next;
                return value;
            }
        };
    };
})();
//# sourceMappingURL=linked-list.js.map