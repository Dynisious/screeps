
/**
 * An action executed by a `Creep`.
 */
declare interface Action {
  /**
   * The identifying number of this Action.
   */
  readonly action: number;
  /**
   * Executs this Action.
   */
  execute: (creep: CreepExt) => void;
}

/**
 * The identifier for a `MoveTo` action.
 */
declare const MOVE_TO: 1;
/**
 * The result of executing a `MoveTo` action.
 */
declare type MoveResult = OK | ERR_NOT_OWNER | ERR_BUSY | ERR_TIRED | ERR_NO_BODYPART | ERR_INVALID_ARGS;

/**
 * An `Action` which moves along a path to a given location.
 */
declare interface MoveTo extends Action {
  readonly action: 1;
  execute: (creep: CreepExt) => MoveResult;
}

declare interface ActionsExport {
  /**
   * Returns a `MoveTo` action for sending `creep` to `dest`.
   */
  move_to: (creep: CreepExt) => (dest: RoomPosition) => ConsList<MoveTo>;
}
