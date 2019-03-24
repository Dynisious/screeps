"use strict";
(() => {
    const result = ({ v, e }) => ({
        is_ok: () => v === undefined,
        is_err: () => e == undefined,
        set_ok: (val) => {
            v = val;
            e = undefined;
        },
        set_err: (error) => {
            v = undefined;
            e = error;
        },
        expect: (err_msg) => {
            if (e !== undefined)
                throw 'called expect on err value: ' + err_msg + e.toString();
            return v;
        },
        expect_err: (err_msg) => {
            if (v !== undefined)
                throw 'called expect_err on ok value: ' + err_msg + v.toString();
            return e;
        },
        unwrap: () => {
            if (e !== undefined)
                throw 'called unwrap on err value: ' + e.toString();
            return v;
        },
        unwrap_err: () => {
            if (v !== undefined)
                throw 'called unwrap_err on ok value: ' + v.toString();
            return e;
        },
        unwrap_or: (o) => v === undefined ? o : v,
        and: (other) => e === undefined ? other : err(e),
        or: (other) => v === undefined ? other : ok(v),
        and_then: (f) => v === undefined ? err(e) : f(v),
        or_else: (f) => e === undefined ? ok(v) : f(e),
        map: (f) => v === undefined ? err(e) : ok(f(v)),
        map_err: (f) => e === undefined ? ok(v) : err(f(e)),
        match: (ok, err) => v === undefined ? err(e) : ok(v)
    });
    const ok = (v) => result({ v });
    const err = (e) => result({ e });
    const maybe = (v) => v === undefined ? err(null) : ok(v);
    const exists = (d) => (v) => v === undefined ? d : v;
    module.exports = { ok, err, maybe, exists };
})();
//# sourceMappingURL=result.js.map