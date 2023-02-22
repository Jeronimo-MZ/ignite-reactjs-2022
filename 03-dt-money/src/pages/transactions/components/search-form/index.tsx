import { FileSearch, MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { z, z as zod } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const SearchFormSchema = zod.object({
  query: z.string(),
});

type SearchFormData = z.infer<typeof SearchFormSchema>;

export function SearchForm() {
  const { register, handleSubmit, formState } = useForm<SearchFormData>({ resolver: zodResolver(SearchFormSchema) });
  async function handleSearchTransactions() {
    console.log("submitting");
    await new Promise(resolve => setTimeout(() => resolve(null), 1000));
    console.log("done");
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
