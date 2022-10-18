import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import { Check, Lock, Users } from 'phosphor-react';
import { Button } from '../components/Button';
import { CheckBox } from '../components/Checkbox';
import { useState } from 'react';
import Logo from '../assets/Logo.svg';
import { NavLink } from 'react-router-dom';
import { Finish } from './Finish';

export function Register(){
    const [user, setUser] = useState('')
    function PegarEmail(event:React.FormEvent){
        event.preventDefault();
        const text = event.target as HTMLInputElement;
        setUser(text.value)
    }

    console.log(user)
    return(
        <div className="flex-col font-regular text-md text-texto-white flex items-center justify-center w-screen h-screen bg-background-pagina">
            <header className='flex flex-col items-center'>
                <img src={Logo} alt="" />
                <Heading size='2xl' className='mt-3'>Adreline</Heading>
                <Text size='md' className='mt-1'>Cadastre-se e aprenda mais!</Text>
            </header>
            <form className='flex flex-col' action='login'>

                <Text size='sm' className='mt-8'>Email</Text>

                <TextInput.Root className='mt-2'>

                <TextInput.Icon>
                    <Users/>
                </TextInput.Icon>

                <TextInput.Input value={user} placeholder='Digite seu Usuario' onChange={PegarEmail}/>

                </TextInput.Root>
            


                <Text size='sm' className='mt-3'>Senha</Text>

                <TextInput.Root className='mt-2 mb-1'>

                <TextInput.Icon>
                    <Lock/>
                </TextInput.Icon>

                <TextInput.Input placeholder='Digite sua Senha'/>

                </TextInput.Root>

                <Text size='sm' className='mt-3'>Confirmar Senha</Text>

                <TextInput.Root className='mt-2 mb-4'>

                <TextInput.Icon>
                    <Lock/>
                </TextInput.Icon>

                <TextInput.Input placeholder='Confirme sua Senha'/>

                </TextInput.Root>

                {/* <div className='flex items-center'>
                <CheckBox className='mt-3 mb-3'>
                    <Check size={24}/>
                </CheckBox>
                <Text size='xs' className='ml-1'>Clique para ficar logado 30 dias</Text>
                </div> */}

                <Button className='mt-3'>Confirmar</Button>
            </form>
            <footer className="flex flex-col items-center gap-4 mt-8">
                {/* <Text asChild size="sm">
                <NavLink to={`/finish`} className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</NavLink>
                </Text> */}
                <Text asChild size="sm">
                <NavLink to={`/`} className="text-gray-400 underline hover:text-gray-200">Já possui conta? Click aqui!</NavLink>
                </Text>
            </footer>
            
        </div>
    );
}