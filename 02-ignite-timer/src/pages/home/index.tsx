import { Play } from "phosphor-react";

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
  Wrapper,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Wrapper>
        <FormContainer
          id="countdown-form"
          onSubmit={e => {
            e.preventDefault();
            console.log("submitted");
          }}
        >
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput type="text" id="task" list="task-suggestions" placeholder="Dê um nome para o seu projeto" />
          <datalist id="task-suggestions">
            <option value="Projecto 1" />
            <option value="Projecto 2" />
            <option value="Projecto 3" />
            <option value="Banana" />
          </datalist>
          <label htmlFor="minutes-amount">durante</label>
          <MinutesAmountInput type="number" id="minutes-amount" placeholder="00" step={5} min={5} max={60} />
          <span>minutos</span>
        </FormContainer>
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <StartCountdownButton type="submit" form="countdown-form" disabled>
          <Play />
          Começar
        </StartCountdownButton>
      </Wrapper>
    </HomeContainer>
  );
}
