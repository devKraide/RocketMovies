import { DetailsContainer } from "./style";

import {FiArrowLeft} from 'react-icons/fi';

import { Link } from "react-router-dom";

export function Details() {
  return (
    <DetailsContainer>
      <Link to="/"><FiArrowLeft/>Voltar</Link>
    </DetailsContainer>
  );
}