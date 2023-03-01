import { ComponentProps } from "@stitches/react";
import { styled } from "./styles";

export type ButtonProps = ComponentProps<typeof Button>;

export const Button = styled("button", {
  fontFamily: "$default",
  backgroundColor: "$ignite300",
  borderRadius: "$md",
  fontWeight: "$bold",
  border: 0,
  color: "$white",
  cursor: "pointer",

  variants: {
    size: {
      sm: {
        padding: "$2 $4",
        fontSize: 14,
      },
      lg: {
        padding: "$3 $6",
        fontSize: 16,
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});
