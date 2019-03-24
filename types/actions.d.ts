
/**
 * The default idle behaviour for all screeps.
 */
declare const ACT_IDLE: 0;
/**
 * The behaviour of following a path from one point to another.
 */
declare const ACT_MOVING: 1;

/**
 * An action object.
 */
type Action = {
  /**
   * The identifier of what kind of action this is.
   */
  action: () => number
};
/**
 * An Idle action object.
 */
interface ActionIdle extends Action {}
/**
 * A Moving action object.
 */
interface ActionMoving extends Action {
  /**
   * The path being followed.
   */
  path: Peekable<PathStep>
}

interface ActionsExport {
  /**
   * Returns an Idle Action.
   */
  idle: () => ActionIdle,
  /**
   * Executes the `action` on `creep`.
   * 
   * @param creep The [CreepExt] to execute `action` on.
   * @param action The [Action] to execute on `creep`.
   * 
   * @returns The result of `action`s execution.
   */
  execute: (creep: CreepExt, action: Action) => Result<null, number>,
  /**
   * Executes the next [Action] pending on `creep`.
   * 
   * Defaults to an Idle action if no Actions are pending.
   * 
   * @param creep The creep to execute the actions of.
   * 
   * @returns The result of the [Action]s execution.
   */
  execute_creep: (creep: CreepExt) => Result<null, number>,
}
