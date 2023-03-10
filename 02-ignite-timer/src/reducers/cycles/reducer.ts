import produce from "immer";

import { ActionTypes } from "./actions";

export type Cycle = {
  id: string;
  task: string;
  minutesAmount: number;
  startedAt: Date;
  interruptedAt?: Date;
  finishedAt?: Date;
};
type CyclesState = {
  cycles: Cycle[];
  activeCycleId: string | null;
};

type ActionProps =
  | { type: ActionTypes.ADD_NEW_CYCLE; payload: { newCycle: Cycle } }
  | { type: ActionTypes.INTERRUPT_CURRENT_CYLE }
  | { type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED };

export function cyclesReducer(state: CyclesState, action: ActionProps) {
  if (action.type === ActionTypes.ADD_NEW_CYCLE) {
    const { newCycle } = action.payload;
    return produce(state, draft => {
      draft.cycles.push(newCycle);
      draft.activeCycleId = newCycle.id;
    });
  }

  const currentCycleIndex = state.cycles.findIndex(cycle => cycle.id === state.activeCycleId);
  if (currentCycleIndex < 0) return state;

  if (action.type === ActionTypes.INTERRUPT_CURRENT_CYLE) {
    return produce(state, draft => {
      draft.cycles[currentCycleIndex].interruptedAt = new Date();
      draft.activeCycleId = null;
    });
  }

  if (action.type === ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED) {
    return produce(state, draft => {
      draft.cycles[currentCycleIndex].finishedAt = new Date();
      draft.activeCycleId = null;
    });
  }
  return state;
}
