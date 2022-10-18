import {clsx} from 'clsx';
import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface HeadingProps {
    size?: '2xl'| 'xl'| 'lg';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Heading({size = '2xl', children, asChild, className}:HeadingProps) {

    const Comp = asChild? Slot : 'h2';

    return (
        <Comp className={clsx('text-texto-white font-bold',
        {
            'text-2xl': size == '2xl',
            'text-xl': size == 'xl',
            'text-lg': size == 'lg',
        
        },className)}>{children}</Comp>
    );
}