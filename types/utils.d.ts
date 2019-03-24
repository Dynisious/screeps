
/**
 * An extension of the base [Creep] type.
 */
interface CreepExt extends Creep {
  memory: CreepMemoryExt
}

/**
 * An extension of the base [CreepMemory] type.
 */
interface CreepMemoryExt extends CreepMemory {
  /**
   * The queue of pending actions on a [Creep].
   */
  actions: LinkedList<Action>
}

/**
 * An [Iterator] where the next value can be viewed without advancing the iterator.
 */
interface Peekable<T> extends Iterator<T> {
  /**
   * Returns the next result without advancing the Iterator.
   */
  peek: () => IteratorResult<T>
}
