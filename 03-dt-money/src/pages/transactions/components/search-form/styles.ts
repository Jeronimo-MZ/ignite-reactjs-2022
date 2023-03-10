import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 300px) {
    gap: 0.5rem;

    input {
      font-size: 0.9375rem;
    }

    button,
    input {
      padding: 0.5rem;
    }
  }

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${props => props.theme["gray-900"]};
    color: ${props => props.theme["gray-300"]};
    padding: 1rem;

    &::placeholder {
      color: ${props => props.theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem;
    background-color: transparent;
    cursor: pointer;

    border: 1px solid ${props => props.theme["green-300"]};
    color: ${props => props.theme["green-300"]};
    border-radius: 6px;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${props => props.theme["green-500"]};
      border-color: ${props => props.theme["green-500"]};
      color: ${props => props.theme["white"]};
    }

    @media (max-width: 420px) {
      span {
        display: none;
      }
    }
  }
`;
