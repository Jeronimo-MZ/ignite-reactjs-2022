import { differenceInSeconds } from "date-fns";
import { createContext, PropsWithChildren, useContext, useEffect, useReducer, useState } from "react";

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
const LOCAL_STORAGE_KEY = "@ignite-timer:cycles-state@1.0.0";
export const CyclesProvider = ({ children }: PropsWithChildren) => {
  const [cyclesState, dispatch] = useReducer(cyclesReducer, { activeCycleId: null, cycles: [] }, () => {
    const storageStateAsJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storageStateAsJSON) {
      return JSON.parse(storageStateAsJSON);
    }
  });

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);
    localStorage.setItem(LOCAL_STORAGE_KEY, stateJSON);
  }, [cyclesState]);

  const activeCycle = cyclesState.cycles.find(cycle => cycle.id === cyclesState.activeCycleId);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startedAt));
    }
    return 0;
  });

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
        activeCycle,
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
