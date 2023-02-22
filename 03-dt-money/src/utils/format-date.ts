export function formatDate(date: Date | string) {
  return Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
  }).format(new Date(date));
}
