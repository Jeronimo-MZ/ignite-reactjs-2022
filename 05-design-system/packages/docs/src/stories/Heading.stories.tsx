import { Heading, HeadingProps } from "@ignite-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
    title: "Typography/Heading",
    component: Heading,
    args: {
        children: "Custom Title",
    },
} as Meta<HeadingProps>;

export const Primary: StoryObj = {};

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        children: "Heading 1",
        as: "h1",
    },
    parameters: {
        docs: {
            description: {
                story: "By default the heading will be an `h2`, but you can change that using the `as` attribute.",
            },
        },
    },
};
