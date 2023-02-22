import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`;
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  span {
    color: ${props => props.theme["gray-100"]};
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 1.6;
  }

  @media screen and (max-width: 320px) {
    span {
      display: none;
    }
  }
`;

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background-color: ${props => props.theme["green-500"]};
  color: ${props => props.theme["white"]};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    font-size: 1.5rem;
  }

  @media (max-width: 420px) {
    span {
      display: none;
    }
  }

  :hover {
    background-color: ${props => props.theme["green-700"]};
  }
`;
