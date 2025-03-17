import { DetailsContainer } from "./style";
import { Link } from "react-router-dom";

// import { StarRating } from '../../components/StarRating';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';

  
export function Details() {
  return (
    <DetailsContainer>
      <Header Title="Filmes" />

      <main>
        <Title title="Interestellar" />

        <div className="info">
        </div>


      </main>


    </DetailsContainer>
  );
}

//<Link to="/"><FiArrowLeft/>Voltar</Link>