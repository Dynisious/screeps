
/**
 * A singly linked list.
 */
interface LinkedList<T> extends Iterable<T> {
  /**
   * Returns the first value of the list.
   */
  head: () => Option<T>,
  /**
   * Returns the last value of the list.
   */
  tail: () => Option<T>,
  /**
   * Returns the number of elements in the list.
   */
  length: () => number,
  /**
   * Appends an element to the front of the list.
   */
  push_front: (_: T) => void,
  /**
   * Appends an element to the back of the list.
   */
  push_back: (_: T) => void,
  /**
   * Removes the first element from the list.
   */
  pop_front: () => Option<T>,
}

type LinkedListExport = <T>(_: T[] | undefined) => LinkedList<T>;
