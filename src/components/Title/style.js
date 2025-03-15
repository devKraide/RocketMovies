import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;


  > h1 {
    margin-top: 24px;
    font-size: 36px;
    font-weight: 500;
    color: ${({theme})=> theme.COLORS.WHITE};
  }
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({theme})=> theme.COLORS.PINK};
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  
`;
