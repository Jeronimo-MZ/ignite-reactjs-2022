import { createContext, PropsWithChildren, useContext, useReducer, useState } from "react";

import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from "@/reducers/cycles/actions";
import { Cycle, cyclesReducer } from "@/reducers/cycles/reducer";

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

export const CyclesProvider = ({ children }: PropsWithChildren) => {
  const [cyclesState, dispatch] = useReducer(cyclesReducer, { activeCycleId: null, cycles: [] });

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction());
  }

  function interruptCurrentCycle() {
    dispatch(interruptCurrentCycleAction());
  }

  function createNewCycle({ task, minutesAmount }: CreateCycleData) {
    const id = new Date().getTime().toString();
    const newCycle: Cycle = { id, task, minutesAmount, startedAt: new Date() };
    dispatch(addNewCycleAction(newCycle));
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
