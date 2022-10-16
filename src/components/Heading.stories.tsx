import {Meta, StoryObj} from '@storybook/react';
import { Heading, HeadingProps } from "./Heading";

export default {
    title:'Components/Heading',
    component: Heading,
    args:{
        children:'Digite Algo',
        size: 'xl',
    },
    argTypes:{
        size:{
            options:['2xl', 'xl', 'lg'],
            control:{
                type:'inline-radio'
            }
        }
    },
} as Meta<HeadingProps>

/* export const Default: StoryObj<TextProps> = {
    args:{
        size:'md'
    },
}; */
export const Medium: StoryObj<HeadingProps> = {
    args:{
        size:'2xl'
    },
}
export const Small: StoryObj<HeadingProps> = {
    args:{
        size:'xl'
    },
}
export const VerySmall: StoryObj<HeadingProps> = {
    args:{
        size:'lg'
    },
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args:{
        asChild:true,
        children:(<h1>
            Testando
        </h1>)
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
    }
}