import { Text, TextProps } from "@ignite-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
    title: "Typography/Text",
    component: Text,
    args: {
        children:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quia maiores odio illo dolorem harum, facere repudiandae nisi, laudantium deleniti officiis magni exercitationem. Magnam exercitationem, sit dolorum autem nesciunt fugiat.",
        size: "md",
    },
    argTypes: {
        size: {
            options: [
                "xxs",
                "xs",
                "sm",
                "md",
                "lg",
                "xl",
                "2xl",
                "4xl",
                "5xl",
                "6xl",
                "7xl",
                "8xl",
                "9xl",
            ],
            control: { type: "select" },
        },
    },
} as Meta<TextProps>;

export const Primary: StoryObj = {};

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: "Strong Text",
        as: "strong",
    },
};
