
(() => {
const { from_list, map, } = <ConsExport>require('utils/cons');
const move_to = (creep: CreepExt) => (dest: RoomPosition): ConsList<MoveTo> => {
  const for_step = (step: PathStep): MoveTo => {
    const execute = (creep: CreepExt): MoveResult =>
      (step.x === creep.pos.x && step.y === creep.pos.y)
      ? creep.move(step.direction)
      : ERR_INVALID_ARGS;

    return { action: MOVE_TO, execute, }
  };
  
  return map(from_list(creep.room.findPath(creep.pos, dest)), for_step);
};

module.exports = <ActionsExport>{ move_to, };
})();
