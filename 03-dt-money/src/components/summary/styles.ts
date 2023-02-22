import styled from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  gap: 2rem;
  margin-top: -5rem;
  flex-wrap: wrap;
`;

type SummaryCardProps = { variant?: "green" };
export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${props => (props.variant === "green" ? props.theme["green-700"] : props.theme["gray-600"])};
  border-radius: 6px;
  padding: 2rem;
  flex: 1;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme["gray-300"]};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }
`;
