import { Box, Heading, styled, Text } from "@ignite-ui/react";

export const Container = styled("div", {
  maxWidth: 572,
  margin: "$20 auto $4",
  padding: "0 $4",
});

export const Header = styled("div", {
  padding: "0 $6",
  [`> ${Heading}`]: {
    lineHeight: "base",
  },
  [`> ${Text}`]: {
    lineHeight: "base",
    color: "$gray200",
  },
});

export const Form = styled(Box, {
  marginTop: "$6",
  display: "flex",
  flexDirection: "column",
  gap: "$4",

  label: {
    display: "flex",
    flexDirection: "column",
    gap: "$2",
  },
});
