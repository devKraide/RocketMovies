import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Star = styled.span`
  font-size: 2rem;
  margin: 0 0.2rem;
  transition: all 0.2s;
  ${({ $isMarked }) =>
    !$isMarked &&
    `
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  `};
`;