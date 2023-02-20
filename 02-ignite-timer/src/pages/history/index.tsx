import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa 1</td>
              <td>25 minutos</td>
              <td>há 2 horas</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 2</td>
              <td>25 minutos</td>
              <td>há 2 horas</td>
              <td>
                <Status statusColor={"yellow"}>Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 3</td>
              <td>25 minutos</td>
              <td>há 2 horas</td>
              <td>
                <Status statusColor={"red"}>Interrompido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
