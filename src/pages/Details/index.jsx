import { DetailsContainer } from "./style";
import { Link } from "react-router-dom";

import {FiArrowLeft} from 'react-icons/fi';

import {Header} from '../../components/Header';

export function Details() {
  return (
    <DetailsContainer>
      <Header />
     
    </DetailsContainer>
  );
}

//<Link to="/"><FiArrowLeft/>Voltar</Link>