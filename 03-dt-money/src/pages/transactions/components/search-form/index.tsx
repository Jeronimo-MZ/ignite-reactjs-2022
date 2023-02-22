import { TransactionsContext } from "@/hooks/use-transactions";
import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { useContextSelector } from "use-context-selector";
import { z } from "zod";
import { SearchFormContainer } from "./styles";

const SearchFormSchema = z.object({
  query: z.string(),
});

type SearchFormData = z.infer<typeof SearchFormSchema>;

export function SearchForm() {
  const fetchTransactions = useContextSelector(TransactionsContext, ctx => ctx.fetchTransactions);
  const { register, handleSubmit, formState } = useForm<SearchFormData>({ resolver: zodResolver(SearchFormSchema) });
  async function handleSearchTransactions({ query }: SearchFormData) {
    await fetchTransactions(query);
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input type="text" placeholder="Busque por transações" {...register("query")} />
      <button disabled={formState.isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
