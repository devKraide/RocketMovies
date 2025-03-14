import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => props.theme.COLORS.PINK};

  display: flex;
  align-items: center; /* Alinha os itens verticalmente ao centro */
  justify-content: space-between;

  padding: 20px 80px;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const SearchInput = styled.input`
  height: 40px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-right: 20px; /* Adiciona espaçamento à direita do input */

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.TEXT};
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px; /* Adiciona espaçamento entre os itens */
  width: 100%;
`;