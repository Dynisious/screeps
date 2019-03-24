"use strict";
(() => {
    const { ok } = require('result');
    const IDLE = { action: () => ACT_IDLE };
    const idle = () => IDLE;
    const execute = (creep, action) => {
        //ToDo
        return ok(null);
    };
    const execute_creep = (creep) => {
        const action = creep.memory.actions.pop_front();
        return action.match(action => execute(creep, action), _ => execute(creep, IDLE));
    };
    module.exports = { idle, execute, execute_creep };
})();
//# sourceMappingURL=actions.js.map