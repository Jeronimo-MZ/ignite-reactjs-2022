import { Avatar, AvatarProps, Text } from "@ignite-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
    title: "Data Display/Avatar",
    component: Avatar,
    args: {
        src: "https://github.com/jeronimo-mz.png",
        alt: "Jerónimo Matavel",
    },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: "",
    },
};
