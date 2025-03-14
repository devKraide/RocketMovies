import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Adicionado para distribuir espaço entre os itens */
  gap: 20px; /* Ajustado para um gap menor */

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};
  margin-bottom: 8px;
  border-radius: 10px;
  padding: 10px; /* Adicionado padding para melhor espaçamento interno */

  > input {
    height: 56px;
    flex: 1; /* Adicionado para permitir que o input ocupe o espaço disponível */
    padding: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.TEXT};
    }
  }

  > svg {
    margin-left: 16px;
  }
`;