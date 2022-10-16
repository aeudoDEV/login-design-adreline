import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from "phosphor-react";

interface CheckBoxProps{}
export function CheckBox(props: CheckBoxProps){
    
    return (
        <Checkbox.Root className="bg-background-input w-6 h-6 rounded text-placecolor">
            <Checkbox.Indicator asChild>
                <Check size={24} />
            </Checkbox.Indicator>
        </Checkbox.Root>
    );
}