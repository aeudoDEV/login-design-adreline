import {clsx} from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{

    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild}:ButtonProps) {

    const Comp = asChild? Slot : 'button';

    return (
        <Comp className='bg-background-button w-full text-texto-white py-3 px-4 rounded font-semibold text-md transition-colors hover:bg-focus-hover'>{children}</Comp>
    );
}