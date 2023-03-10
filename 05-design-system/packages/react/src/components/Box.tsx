import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export type BoxProps = ComponentProps<typeof Box> & { as?: ElementType };

export const Box = styled("div", {
  padding: "$4",
  borderRadius: "$md",
  border: "1px solid $gray600",
  backgroundColor: "$gray800",
});

Box.displayName = "Box";
