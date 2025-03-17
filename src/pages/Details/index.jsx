import { DetailsContainer } from "./style";
import { Link } from "react-router-dom";

// import { StarRating } from '../../components/StarRating';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import { StarRating } from '../../components/StarRating';

export function Details() {
  return (
    <DetailsContainer>
      <Header Title="Filmes" />

      <main>
        <div className="info">
        <Title title="Interestellar" />
        <div className="rating">

        <StarRating totalStars = {5} isEditable = {false} initialRating = {0}/>
        </div>
        </div>


      </main>


    </DetailsContainer>
  );
}

//<Link to="/"><FiArrowLeft/>Voltar</Link>