import * as Checkbox from '@radix-ui/react-checkbox';
import clsx from 'clsx';
import { Check } from "phosphor-react";
import { ReactNode } from 'react';

interface CheckBoxProps{
    children: ReactNode;
    className?: string;
}
export function CheckBox(props: CheckBoxProps){
    
    return (
        <Checkbox.Root className={clsx("bg-background-input w-6 h-6 rounded text-placecolor",props.className)}>
            <Checkbox.Indicator asChild>
                
                {props.children}
            </Checkbox.Indicator>
        </Checkbox.Root>
    );
}