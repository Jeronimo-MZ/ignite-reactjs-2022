import styled from "styled-components";

export const TransactionsContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem 4rem;
`;

export const TransactionsTableContainer = styled.section`
  width: 100%;
  overflow-x: auto;
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  margin-top: 1rem;
  border-spacing: 0 0.5rem;

  td {
    padding: 1.25rem 2rem;
    background-color: ${props => props.theme["gray-700"]};
    font-weight: 400;
    white-space: nowrap;
    :first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      width: 50%;
    }

    :last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

type PriceHighlightProps = {
  variant: "income" | "outcome";
};

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${props => (props.variant === "income" ? props.theme["green-300"] : props.theme["red-300"])};
`;
