import { FileSearch, MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransactions } from "@/hooks/use-transactions";

const SearchFormSchema = z.object({
  query: z.string(),
});

type SearchFormData = z.infer<typeof SearchFormSchema>;

export function SearchForm() {
  const { fetchTransactions } = useTransactions();
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
