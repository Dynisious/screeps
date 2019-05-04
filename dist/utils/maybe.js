"use strict";
(() => {
    const optional = (maybe) => (maybe === undefined) ? null : maybe;
    const cond = (cond, value) => cond ? value : null;
    const cond_then = (cond, value) => cond ? value() : null;
    const maybe = (maybe, a) => (maybe === null) ? a : maybe;
    const maybe_then = (maybe, a) => (maybe === null) ? a() : maybe;
    const map = (maybe, map) => (maybe === null) ? null : map(maybe);
    const map_or = (maybe, map, or) => (maybe === null) ? or : map(maybe);
    const map_or_else = (maybe, map, or) => (maybe === null) ? or() : map(maybe);
    const or = (a, b) => (a === null) ? b : a;
    const or_else = (a, b) => (a === null) ? b() : a;
    const and = (a, b) => (a === null) ? a : b;
    const and_then = (a, b) => (a === null) ? a : b(a);
    module.exports = { optional, cond, cond_then, maybe, maybe_then, map, map_or, map_or_else, or, or_else, and, and_then, };
})();
//# sourceMappingURL=maybe.js.map