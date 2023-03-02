import { Box, Text, MultiStep, MultiStepProps } from "@ignite-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
    title: "Form/Multi Step",
    component: MultiStep,
    args: { size: 4, currentStep: 1 },
    decorators: [
        (Story) => (
            <Box css={{ display: "flex", flexDirection: "column", gap: "$2" }}>
                {Story()}
            </Box>
        ),
    ],
} as Meta<MultiStepProps>;

export const Primary: StoryObj<MultiStepProps> = {};
export const Full: StoryObj<MultiStepProps> = {
    args: { currentStep: 4 },
};
