import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { useCycles } from "@/contexts/cycles";

import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
  const { cycles } = useCycles();
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
            {cycles.map(cycle => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutos</td>
                <td>
                  <time dateTime={cycle.startedAt.toISOString()}>
                    {formatDistanceToNow(cycle.startedAt, { locale: ptBR, addSuffix: true })}
                  </time>
                </td>
                <td>
                  {cycle.finishedAt && <Status statusColor="green">Concluído</Status>}
                  {cycle.interruptedAt && <Status statusColor="red">Interrompido</Status>}
                  {!cycle.finishedAt && !cycle.interruptedAt && <Status statusColor="yellow">Em Andamento</Status>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
