
(() => {
  const { ok } = require('result') as ResultExport;
  
  const IDLE = { action: () => ACT_IDLE };
  const idle = (): ActionIdle => IDLE;
  const execute = (creep: CreepExt, action: Action): Result<null, number> => {
    //ToDo
    return ok(null);
  };
  const execute_creep = (creep: CreepExt): Result<null, number> => {
    const action = creep.memory.actions.pop_front();

    return action.match(action => execute(creep, action), _ => execute(creep, IDLE));
  };

  module.exports = { idle, execute, execute_creep };
})();
