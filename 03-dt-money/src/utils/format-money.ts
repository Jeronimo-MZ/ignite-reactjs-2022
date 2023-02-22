export function formatMoney(amount: number) {
  const defaultFormatter = Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  const compactFormatter = Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", notation: "compact" });
  const defaultFormat = defaultFormatter.format(amount);
  const compactFormat = compactFormatter.format(amount);
  const ONE_MILLION = 1_000_000;
  return {
    defaultFormat,
    compactFormat: amount >= ONE_MILLION ? compactFormat : defaultFormat,
  };
}
