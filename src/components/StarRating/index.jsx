import React, { useState, useEffect } from 'react';
import { Container, Star } from './style';
import { useTheme } from 'styled-components';

export function StarRating  ({ totalStars = 5, isEditable = true, initialRating = 0 })  {
  const theme = useTheme();
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  // Carrega a classificação do localStorage (se editável)
  useEffect(() => {
    if (isEditable) {
      const savedRating = localStorage.getItem('rating');
      if (savedRating) {
        setRating(Number.parseInt(savedRating, 10));
      }
    }
  }, [isEditable]);

  // Salva a classificação no localStorage (se editável)
  useEffect(() => {
    if (isEditable && rating !== 0) {
      localStorage.setItem('rating', rating);
    }
  }, [rating, isEditable]);

  return (
    <Container>
      {[...Array(totalStars)].map((_, index) => {
        const ratingValue = index + 1;
        const isMarked = ratingValue <= (hover || rating); // Estrela marcada ou em hover
        return (
          <Star
            key={`star-${ratingValue}`}
            onClick={isEditable ? () => setRating(ratingValue) : null}
            onMouseEnter={isEditable ? () => setHover(ratingValue) : null}
            onMouseLeave={isEditable ? () => setHover(0) : null}
            style={{
              color: theme.COLORS.PINK, // Cor da borda ou preenchimento
              backgroundColor: isMarked ? 'transparent' : theme.COLORS.BACKGROUND_1, // Fundo apenas para não marcadas
              cursor: isEditable ? 'pointer' : 'default',
            }}
            $isMarked={isMarked} // Passa o estado para o styled-component
          >
            {isMarked ? '★' : '☆'} {/* Estrela preenchida ou apenas contorno */}
          </Star>
        );
      })}
    </Container>
  );
};

