import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import { Check, Lock, Users } from 'phosphor-react';
import { Button } from '../components/Button';
import { CheckBox } from '../components/Checkbox';
import { useState } from 'react';
import Logo from '../assets/Logo.svg';
import { NavLink, useNavigate, useNavigation } from 'react-router-dom';
import { Register } from './Register';
import { Finish } from './Finish';
import Axios from 'axios';
import axios from 'axios';

export function LoginU(){
    const [email, setEmail] = useState('')
    function PegarEmail(event:React.FormEvent){
        event.preventDefault();
        const email = event.target as HTMLInputElement;
        setEmail(email.value)
    }
    const [pass, setPass] = useState('')
    function PegarSenha(event:React.FormEvent){
        event.preventDefault();
        const pass = event.target as HTMLInputElement;
        setPass(pass.value)
    }
  
    const navi = useNavigation();
    const AxiosConnect = (event:React.FormEvent)=>{
        event.preventDefault();

        axios.post('http://127.0.0.1:5432/login', {email: email, pass: pass})
        .then((response)=>{

            console.log('deu certo')
        })
        .catch((error)=>{console.log(error)})
        
    }
    
    return (
        <div className="flex-col font-regular text-md text-texto-white flex items-center justify-center w-screen h-screen bg-background-pagina">
            <header className='flex flex-col items-center'>
                <img src={Logo} alt="" />
                <Heading size='2xl' className='mt-3'>Adreline</Heading>
                <Text size='md' className='mt-1'>Faça login e comece a usar!</Text>
            </header>
            <form onSubmit={AxiosConnect} className='flex flex-col' action='login'>

                <Text size='sm' className='mt-8'>Email</Text>

                <TextInput.Root className='mt-2'>

                <TextInput.Icon>
                    <Users/>
                </TextInput.Icon>

                <TextInput.Input value={email} placeholder='Digite seu Usuario' onChange={PegarEmail}/>

                </TextInput.Root>
            


                <Text size='sm' className='mt-3'>Senha</Text>

                <TextInput.Root className='mt-2 mb-4'>

                <TextInput.Icon>
                    <Lock/>
                </TextInput.Icon>

                <TextInput.Input type='password' value={pass} placeholder='Digite sua Senha' onChange={PegarSenha}/>

                </TextInput.Root>

                {/* <div className='flex items-center'>
                <CheckBox className='mt-3 mb-3'>
                    <Check size={24}/>
                </CheckBox>
                <Text size='xs' className='ml-1'>Clique para ficar logado 30 dias</Text>
                </div> */}

                <Button type='submit' className='mt-3'>Confirmar</Button>
            </form>
            <footer className="flex flex-col items-center gap-4 mt-8">
                {/* <Text asChild size="sm">
                <NavLink to={`/finish`} className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</NavLink>
                </Text> */}
                <Text asChild size="sm">
                <NavLink to={`/register`} className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora!</NavLink>
                </Text>
            </footer>
            
        </div>
    );
}