/*
 * action types
 */

export const CREATE_TASK = 'CREATE_TASK';

export function createTask(name) {
  return { type: CREATE_TASK, name };
}

export const REMOVE_TASK = 'REMOVE_TASK';

export function removeTask(id){
  return { type: REMOVE_TASK, id };
}
