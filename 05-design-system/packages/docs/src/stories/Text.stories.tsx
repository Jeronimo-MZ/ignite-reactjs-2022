import { Text, TextProps } from "@ignite-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
    title: "Typography/Text",
    component: Text,
    args: {
        children:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quia maiores odio illo dolorem harum, facere repudiandae nisi, laudantium deleniti officiis magni exercitationem. Magnam exercitationem, sit dolorum autem nesciunt fugiat.",
    },
} as Meta<TextProps>;

export const Primary: StoryObj = {};

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: "Strong Text",
        as: "strong",
    },
};
