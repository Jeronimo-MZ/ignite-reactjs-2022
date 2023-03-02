import { ComponentProps } from "react";
import { styled } from "../styles";

export type TextAreaProps = ComponentProps<typeof TextArea>;
export const TextArea = styled("textarea", {
  background: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  display: "flex",
  alignItems: "baseline",

  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "$regular",
  resize: "vertical",
  minHeight: 80,

  "&:has(input:focus)": {
    borderColor: "$ignite300",
  },

  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  "&::placeholder": {
    color: "$gray400",
  },
});

TextArea.displayName = "TextArea";
