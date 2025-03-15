import { FiArrowLeft } from 'react-icons/fi';
import { TitleContainer, BackButton } from './style';

export function Title ({title}) {
  return (
    <TitleContainer>
       <BackButton to="/">
        <FiArrowLeft/>
        <span>Voltar</span>
       </BackButton>

      <h1>{title}</h1>
    </TitleContainer>
  )
};
