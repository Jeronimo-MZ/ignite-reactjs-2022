import { ComponentProps } from "react";
import { Label, MultiStepContainer, Step, Steps } from "./styles";

export type MultiStepProps = ComponentProps<typeof MultiStepContainer> & {
  size: number;
  currentStep?: number;
};

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>
      <Steps css={{ "--steps-size": size }}>
        {Array.from({ length: size }, (_, index) => index + 1).map(step => (
          <Step key={step} active={step <= currentStep} />
        ))}
      </Steps>
    </MultiStepContainer>
  );
}
