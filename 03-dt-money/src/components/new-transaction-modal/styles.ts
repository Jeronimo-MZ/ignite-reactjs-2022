import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;
export const Content = styled.div`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${props => props.theme["gray-800"]};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const NewTransactionForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  input {
    border-radius: 6px;
    border: 0;
    background: ${props => props.theme["gray-900"]};
    color: ${props => props.theme["gray-300"]};
    padding: 1rem;

    &::placeholder {
      color: ${props => props.theme["gray-500"]};
    }
  }

  button[type="submit"] {
    height: 58px;
    border: 0;
    background-color: ${props => props.theme["green-500"]};
    color: ${props => props.theme["white"]};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    margin-top: 1.5rem;
    cursor: pointer;
    transition: background-color 0.2s;

    :hover {
      background-color: ${props => props.theme["green-700"]};
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  color: ${props => props.theme["gray-500"]};
  padding: 0;

  svg {
    font-size: 1.5rem;
  }
`;
