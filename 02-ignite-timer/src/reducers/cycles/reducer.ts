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

export function cyclesReducer(state: CyclesState, action: any) {
  if (action.type === ActionTypes.ADD_NEW_CYCLE) {
    return {
      ...state,
      cycles: [...state.cycles, action.payload.newCycle],
      activeCycleId: action.payload.newCycle.id,
    };
  }
  if (action.type === ActionTypes.INTERRUPT_CURRENT_CYLE) {
    return {
      ...state,
      cycles: state.cycles.map(cycle => {
        if (cycle.id !== state.activeCycleId) return cycle;
        return { ...cycle, interruptedAt: new Date() };
      }),
      activeCycleId: null,
    };
  }
  if (action.type === ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED) {
    return {
      ...state,
      cycles: state.cycles.map(cycle => {
        if (cycle.id !== state.activeCycleId) return cycle;
        return { ...cycle, finishedAt: new Date() };
      }),
      activeCycleId: null,
    };
  }
  console.log({ state, action });
  return state;
}
