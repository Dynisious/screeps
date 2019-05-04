"use strict";
(() => {
    const { from_list, map, } = require('utils/cons');
    const move_to = (creep) => (dest) => {
        const for_step = (step) => {
            const execute = (creep) => (step.x === creep.pos.x && step.y === creep.pos.y)
                ? creep.move(step.direction)
                : ERR_INVALID_ARGS;
            return { action: MOVE_TO, execute, };
        };
        return map(from_list(creep.room.findPath(creep.pos, dest)), for_step);
    };
    module.exports = { move_to, };
})();
//# sourceMappingURL=actions.js.map