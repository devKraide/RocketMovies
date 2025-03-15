import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  grid-area: header;

  height: 155px;
  width: 100%;
  
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme})=> theme.COLORS.TEXT};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 120px;

  gap: 64px;

  > h1{
    line-height: 32px;
    color: ${({theme})=> theme.COLORS.PINK};
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.TEXT};
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    line-height: 24px;
    align-items: flex-end;


    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.TEXT};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      white-space: nowrap;
    }
  }
`;
