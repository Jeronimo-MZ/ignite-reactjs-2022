import { ComponentProps } from "@stitches/react";
import { ElementType } from "react";
import { styled } from "../styles";

export type ButtonProps = ComponentProps<typeof Button> & { as?: ElementType };
export const Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  minWidth: 120,
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  gap: "$2",
  padding: "0 $4",
  "&:disabled": { cursor: "not-allowed" },
  transitionDuration: 150,

  svg: {
    width: "$4",
    height: "$4",
  },

  variants: {
    variant: {
      primary: {
        color: "$white",
        backgroundColor: "$ignite500",
        "&:not(:disabled):hover": { backgroundColor: "$ignite300" },
        "&:disabled": { backgroundColor: "$gray200" },
      },
      secondary: {
        color: "$ignite300",
        border: "2px solid $ignite500",
        "&:not(:disabled):hover": { backgroundColor: "$ignite500", color: "$white" },
        "&:disabled": { color: "$gray200", borderColor: "$gray200" },
      },
      tertiary: {
        color: "$gray100",
        "&:not(:disabled):hover": { color: "$white" },
        "&:disabled": { color: "$gray600" },
      },
    },
    size: {
      sm: { height: 38 },
      md: { height: 46 },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
