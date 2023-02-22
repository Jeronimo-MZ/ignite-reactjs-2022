export function formatMoney(amount: number) {
  const moneyFormatter = Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  return moneyFormatter.format(amount);
}
