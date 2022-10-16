import { Slot } from '@radix-ui/react-slot';
import {clsx} from 'clsx';

import { InputHTMLAttributes, ReactNode } from 'react';


export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {};
export interface TextInputRootProps{
    children: ReactNode;
}
export interface TextInputIconProps{
    children: ReactNode;
}
function TextInputRoot(props: TextInputRootProps){
    return (
        
        <div className={clsx('h-12 flex items-center py-3 px-4 bg-background-input gap-3 rounded text-sm font-regular w-full focus-within:ring-2 ring-focus-input')}>
            {props.children}
        </div>
    );
}

function TextInputIcon(props :TextInputIconProps){
    return (
        <Slot className={clsx('h-6 w-6 text-placecolor')}>
            {props.children}
        </Slot>
    );
   
}

function TextInputInput(props:TextInputInputProps) {
    return (
        <input {...props} className='bg-transparent outline-none flex-1 text-texto-white placeholder:placeholder-placecolor'/> 
    );
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}

TextInputRoot.displayName = 'Div';
TextInputIcon.displayName = 'Icon';
TextInputInput.displayName = 'Input';