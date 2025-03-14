import styled from "styled-components";

export const InputContainer = styled.div`

  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};
  color: ${({ theme }) => theme.COLORS.WHITE};

  margin-bottom: 8px;
  border-radius: 10px;
  height: 56px;

  > input{
    height: 56px;
    width: 100%;

    padding: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    border: 0;

    &:placeholder{
      color: ${({ theme }) => theme.COLORS.TEXT};
    }

    

  }

  > svg{
      margin-left: 16px;
    }
    
`;
