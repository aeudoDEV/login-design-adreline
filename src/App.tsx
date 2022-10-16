import { TextInput, TextInputRootProps } from './components/TextInput';
import './styles/global.css';

export function App({children}: TextInputRootProps) {

  return (
    <>
      <TextInput.Root children={children} />
    </>
  )
}

