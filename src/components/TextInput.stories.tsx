import { TextInput, TextInputRootProps } from "./TextInput";
import { Lock, Users } from 'phosphor-react';
import {Meta, StoryObj} from '@storybook/react';
export default {
    title:'Components/TextInput',
    component: TextInput.Root,
    args:{
        children: 
        (
            <>
                <TextInput.Icon>
                    <Users/>
                </TextInput.Icon>
                <TextInput.Input placeholder="Mano do céu?"/>
            </>
        ),
        /* placeholder: 'Digite seu email',
        type: 'email', */

    },
    argTypes:{
        children:{
            table:{
                disable:true,
            }
        },
    },
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {};
export const NoIcon: StoryObj<TextInputRootProps> = {
    args: {children:(<TextInput.Input placeholder="Mano do céu?"/>)},
};
