import { Cycle } from "./reducer";

export enum ActionTypes {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
  INTERRUPT_CURRENT_CYLE = "INTERRUPT_CURRENT_CYLE",
  MARK_CURRENT_CYCLE_AS_FINISHED = "MARK_CURRENT_CYCLE_AS_FINISHED",
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    action: ActionTypes.ADD_NEW_CYCLE,
    payload: newCycle,
  };
}

export function interruptCurrentCycleAction() {
  return {
    action: ActionTypes.INTERRUPT_CURRENT_CYLE,
  };
}

export function markCurrentCycleAsFinishedAction() {
  return {
    action: ActionTypes.INTERRUPT_CURRENT_CYLE,
  };
}
