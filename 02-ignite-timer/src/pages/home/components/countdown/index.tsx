import { differenceInSeconds } from "date-fns";
import { useEffect } from "react";
import { useTheme } from "styled-components";

import { useCycles } from "@/contexts/cycles";

import { CountdownContainer, Separator } from "./styles";

export function Countdown() {
  const { activeCycle, markCurrentCycleAsFinished, amountSecondsPassed, setSecondsPassed } = useCycles();

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutes = Math.floor(currentSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (currentSeconds % 60).toString().padStart(2, "0");

  useEffect(() => {
    if (!activeCycle) return;
    const interval = setInterval(() => {
      const secondsDifference = differenceInSeconds(new Date(), new Date(activeCycle.startedAt));
      if (secondsDifference > totalSeconds) {
        markCurrentCycleAsFinished();
      } else {
        setSecondsPassed(secondsDifference);
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

  const theme = useTheme();
  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator style={{ color: activeCycle ? theme["red-500"] : theme["green-500"] }}>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  );
}
