import { createContext, PropsWithChildren, useContext, useState } from "react";

type Cycle = {
  id: string;
  task: string;
  minutesAmount: number;
  start: Date;
  interruptedAt?: Date;
  finishedAt?: Date;
};

type CreateCycleData = { task: string; minutesAmount: number };
type CyclesContextData = {
  activeCycle?: Cycle;
  amountSecondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  interruptCurrentCycle: () => void;
  createNewCycle: (data: CreateCycleData) => void;
  setSecondsPassed: (seconds: number) => void;
};

const CyclesContext = createContext<CyclesContextData>({} as CyclesContextData);

export const CyclesProvider = ({ children }: PropsWithChildren) => {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  function markCurrentCycleAsFinished() {
    setCycles(cycles =>
      cycles.map(cycle => {
        if (cycle.id !== activeCycleId) return cycle;
        return { ...cycle, finishedAt: new Date() };
      })
    );
    setActiveCycleId(null);
  }

  function interruptCurrentCycle() {
    setCycles(cycles =>
      cycles.map(cycle => {
        if (cycle.id !== activeCycleId) return cycle;
        return { ...cycle, interruptedAt: new Date() };
      })
    );
    setActiveCycleId(null);
  }

  function createNewCycle({ task, minutesAmount }: CreateCycleData) {
    const id = new Date().getTime().toString();
    const newCycle: Cycle = { id, task, minutesAmount, start: new Date() };
    setCycles(prev => [...prev, newCycle]);
    setActiveCycleId(id);
    setAmountSecondsPassed(0);
  }

  return (
    <CyclesContext.Provider
      value={{
        activeCycle: cycles.find(cycle => cycle.id === activeCycleId),
        amountSecondsPassed,
        markCurrentCycleAsFinished,
        interruptCurrentCycle,
        createNewCycle,
        setSecondsPassed: setAmountSecondsPassed,
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
