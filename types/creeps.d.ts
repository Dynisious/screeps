
/**
 * Extends the `Creep` type.
 */
interface CreepExt extends Creep {
  /**
   * Extends the memory of a Creep.
   */
  memory: CreepMemoryExt;
  /**
   * 
   */
  update: () => void;
}

interface CreepMemoryExt extends CreepMemory {
  actions: ConsList<Action>;
}
