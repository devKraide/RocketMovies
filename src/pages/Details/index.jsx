import { DetailsContainer } from "./style";
import { Link } from "react-router-dom";

import {FiArrowLeft} from 'react-icons/fi';

import {Header} from '../../components/Header';
import {Title} from '../../components/Title';

export function Details() {
  return (
    <DetailsContainer>
      <Header Title="Filmes"/>
      
      <main>
      <Title title="Interestellar"/>
      </main>


    </DetailsContainer>
  );  
}

//<Link to="/"><FiArrowLeft/>Voltar</Link>