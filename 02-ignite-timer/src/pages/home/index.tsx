import { zodResolver } from "@hookform/resolvers/zod";
import { HandPalm, Play } from "phosphor-react";
import { FormProvider, useForm } from "react-hook-form";
import { z as zod } from "zod";

import { useCycles } from "@/contexts/cycles";

import { Countdown } from "./components/countdown";
import { NewCycleForm } from "./components/new-cycle-form";
import { HomeContainer, StartCountdownButton, StopCountdownButton, Wrapper } from "./styles";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo precisa ser de no mínimo 5 minutos")
    .max(60, "O ciclo precisa ser de no máximo 60 minutos"),
});

export type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 5,
    },
  });
  const { formState } = newCycleForm;

  const { activeCycle, interruptCurrentCycle } = useCycles();

  return (
    <HomeContainer>
      <Wrapper>
        <FormProvider {...newCycleForm}>
          <NewCycleForm formId="countdown-form" />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle}>
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
