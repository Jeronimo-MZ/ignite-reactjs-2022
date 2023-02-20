import { zodResolver } from "@hookform/resolvers/zod";
import { differenceInSeconds } from "date-fns";
import { HandPalm, Play } from "phosphor-react";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z as zod } from "zod";

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  StopCountdownButton,
  TaskInput,
  Wrapper,
} from "./styles";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo precisa ser de no mínimo 5 minutos")
    .max(60, "O ciclo precisa ser de no máximo 60 minutos"),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

type Cycle = {
  id: string;
  task: string;
  minutesAmount: number;
  start: Date;
  interruptedAt?: Date;
};

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const { register, formState, handleSubmit, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 5,
    },
  });

  const handleNewCycle: SubmitHandler<NewCycleFormData> = ({ minutesAmount, task }) => {
    const id = new Date().getTime().toString();
    const newCycle: Cycle = { id, task, minutesAmount, start: new Date() };
    setCycles(prev => [...prev, newCycle]);
    setActiveCycleId(id);
    setAmountSecondsPassed(0);
    reset();
  };

  const handleInterruptCycle = () => {
    setCycles(cycles =>
      cycles.map(cycle => {
        if (cycle.id !== activeCycleId) return cycle;
        return { ...cycle, interruptedAt: new Date() };
      })
    );
    setActiveCycleId(null);
  };

  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutes = Math.floor(currentSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (currentSeconds % 60).toString().padStart(2, "0");

  useEffect(() => {
    if (!activeCycle) return;
    const interval = setInterval(() => {
      const secondsDifference = differenceInSeconds(new Date(), activeCycle.start);
      if (secondsDifference > totalSeconds) {
        setActiveCycleId(null);
      } else {
        setAmountSecondsPassed(secondsDifference);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [activeCycle]);

  useEffect(() => {
    const prefix = !activeCycle ? "" : `${minutes}:${seconds} | `;
    document.title = `${prefix}Ignite Timer`;
  }, [minutes, seconds]);

  return (
    <HomeContainer>
      <Wrapper>
        <FormContainer id="countdown-form" onSubmit={handleSubmit(handleNewCycle)}>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register("task", { required: "Campo obrigatório" })}
            disabled={!!activeCycle}
          />
          <datalist id="task-suggestions">
            <option value="Projecto 1" />
            <option value="Projecto 2" />
            <option value="Projecto 3" />
            <option value="Banana" />
          </datalist>
          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register("minutesAmount", { valueAsNumber: true })}
            disabled={!!activeCycle}
          />
          <span>minutos</span>
        </FormContainer>
        <CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountdownContainer>

        {activeCycle ? (
          <StopCountdownButton onClick={handleInterruptCycle}>
            <HandPalm />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" form="countdown-form" disabled={!formState.isValid}>
            <Play />
            Começar
          </StartCountdownButton>
        )}
      </Wrapper>
    </HomeContainer>
  );
}
