import { ComponentProps } from "react";
import { TextInputContainer, Prefix, Input } from "./styles";

export type TextInputProps = ComponentProps<typeof Input> & {
  prefix?: string;
};

export function TextInput({ prefix, ...inputProps }: TextInputProps) {
  return (
    <TextInputContainer>
      {prefix && <Prefix>{prefix}</Prefix>}
      <Input {...inputProps} />
    </TextInputContainer>
  );
}
