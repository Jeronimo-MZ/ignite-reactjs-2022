import { createContext, PropsWithChildren, useContext, useReducer, useState } from "react";

type Cycle = {
  id: string;
  task: string;
  minutesAmount: number;
  startedAt: Date;
  interruptedAt?: Date;
  finishedAt?: Date;
};

type CreateCycleData = { task: string; minutesAmount: number };
type CyclesContextData = {
  activeCycle?: Cycle;
  cycles: Cycle[];
  amountSecondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  interruptCurrentCycle: () => void;
  createNewCycle: (data: CreateCycleData) => void;
  setSecondsPassed: (seconds: number) => void;
};

const CyclesContext = createContext<CyclesContextData>({} as CyclesContextData);

type CyclesState = {
  cycles: Cycle[];
  activeCycleId: string | null;
};

export const CyclesProvider = ({ children }: PropsWithChildren) => {
  const [cyclesState, dispatch] = useReducer(
    (state: CyclesState, action: any) => {
      if (action.type === "ADD_NEW_CYCLE") {
        return {
          ...state,
          cycles: [...state.cycles, action.payload.newCycle],
          activeCycleId: action.payload.newCycle.id,
        };
      }
      if (action.type === "INTERRUPT_CURRENT_CYLE") {
        return {
          ...state,
          cycles: state.cycles.map(cycle => {
            if (cycle.id !== state.activeCycleId) return cycle;
            return { ...cycle, interruptedAt: new Date() };
          }),
          activeCycleId: null,
        };
      }
      if (action.type === "MARK_CURRENT_CYCLE_AS_FINISHED") {
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
    },
    { activeCycleId: null, cycles: [] }
  );

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  function markCurrentCycleAsFinished() {
    dispatch({ type: "MARK_CURRENT_CYCLE_AS_FINISHED" });
  }

  function interruptCurrentCycle() {
    dispatch({ type: "INTERRUPT_CURRENT_CYLE" });
  }

  function createNewCycle({ task, minutesAmount }: CreateCycleData) {
    const id = new Date().getTime().toString();
    const newCycle: Cycle = { id, task, minutesAmount, startedAt: new Date() };
    dispatch({ type: "ADD_NEW_CYCLE", payload: { newCycle } });
    setAmountSecondsPassed(0);
  }

  return (
    <CyclesContext.Provider
      value={{
        activeCycle: cyclesState.cycles.find(cycle => cycle.id === cyclesState.activeCycleId),
        amountSecondsPassed,
        markCurrentCycleAsFinished,
        interruptCurrentCycle,
        createNewCycle,
        setSecondsPassed: setAmountSecondsPassed,
        cycles: cyclesState.cycles,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
};

export function useCycles() {
  const context = useContext(CyclesContext);
  return context;
}
