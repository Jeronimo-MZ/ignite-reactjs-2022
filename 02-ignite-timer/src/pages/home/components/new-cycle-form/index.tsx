import { SubmitHandler, useFormContext } from "react-hook-form";

import { useCycles } from "@/contexts/cycles";
import { NewCycleFormData } from "@/pages/home";

import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

type NewCycleFormProps = {
  formId: string;
};
export function NewCycleForm({ formId }: NewCycleFormProps) {
  const { register, reset, handleSubmit } = useFormContext<NewCycleFormData>();
  const { activeCycle, createNewCycle } = useCycles();

  const handleNewCycle: SubmitHandler<NewCycleFormData> = ({ minutesAmount, task }) => {
    createNewCycle({ minutesAmount, task });
    reset();
  };

  return (
    <FormContainer id={formId} onSubmit={handleSubmit(handleNewCycle)}>
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
  );
}
