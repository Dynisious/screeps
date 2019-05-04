
(() => {
const { head, rest, } = <ConsExport>require('utils/cons');
const { move_to, } = <ActionsExport>require('actions');
/**
 * The update function for `CreepExt`s.
 * 
 * @param creep The `CreepExt` to update.
 */
const update = (creep: CreepExt) => () => {
  if (creep.spawning) return;
  if (creep.memory.actions === null) creep.memory.actions = <Maybe<ConsList<Action>>>move_to(creep)(creep.room.getPositionAt(15, 15)!);
  if (creep.memory.actions === null) return;

  head(creep.memory.actions).execute(creep);
  creep.memory.actions = rest(creep.memory.actions);
};
/**
 * Converts the `Creep` into a `CreepExt` adding fields as necessary.
 */
const creep_ext = (creep?: Creep): Maybe<CreepExt> => {
  if (creep === undefined) return null;
  if ((<CreepMemoryExt>creep.memory).actions === undefined) {
    (<CreepMemoryExt>creep.memory).actions = null;
    (<CreepExt>creep).update = update(<CreepExt>creep);
  }

  return <CreepExt>creep;
};

module.exports.loop = () => {
  //Update all creeps.
  for (const name in Memory.creeps) {
    //Convert the `Creep` into a `CreepExt`.
    const creep = creep_ext(Game.creeps[name]);

    //If the creep is missing delete its memory.
    if (creep === null) {
      delete Memory.creeps[name];
      continue;
    }
    
    creep.update();
  }
};
})();
