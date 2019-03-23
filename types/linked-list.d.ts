
type LinkedList<T> = {
  length: () => number,
  push_front: (_: T) => void,
  push_back: (_: T) => void,
  pop_front: () => Option<T>
};
