import {clsx} from 'clsx';
import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextProps {
    size?: 'md'|'sm'|'xs';
    children: ReactNode;
    asChild?: boolean;
}

export function Text({size = 'md', children, asChild}:TextProps) {
    const Comp = asChild? Slot : 'span';

    return (
        <Comp className={clsx('text-placecolor',
        {
            'text-md': size == 'md',
            'text-sm': size == 'sm',
            'text-xs': size == 'xs',
        
        })}>{children}</Comp>
    );
}