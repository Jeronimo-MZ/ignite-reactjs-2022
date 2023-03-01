import { Box, BoxProps } from "@ignite-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
    title: "Surfaces/Box",
    component: Box,
    args: {
        children: (
            <>
                <span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </span>
            </>
        ),
    },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
