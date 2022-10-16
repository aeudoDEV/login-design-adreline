import { Text, TextProps } from "./Text";
import {Meta, StoryObj} from '@storybook/react';
export default {
    title:'Components/Text',
    component: Text,
    args:{
        children:'Digite Algo',
        size: 'md',
    },
    argTypes:{
        size:{
            options:['md', 'sm', 'xs'],
            control:{
                type:'inline-radio'
            }
        }
    },
} as Meta<TextProps>

/* export const Default: StoryObj<TextProps> = {
    args:{
        size:'md'
    },
}; */
export const Medium: StoryObj<TextProps> = {
    args:{
        size:'md'
    },
}
export const Small: StoryObj<TextProps> = {
    args:{
        size:'sm'
    },
}
export const VerySmall: StoryObj<TextProps> = {
    args:{
        size:'xs'
    },
}
export const CustomComponent: StoryObj<TextProps> = {
    args:{
        asChild:true,
        children:(<p>
            Testando
        </p>)
    },
    argTypes:{
        children:{
            table:{
                disable:true,
            }
        },
        asChild:{
            table: {
                disable:true,
            }
        }
    },
}