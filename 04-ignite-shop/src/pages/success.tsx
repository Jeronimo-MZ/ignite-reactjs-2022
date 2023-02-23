import { SuccessContainer, ImageContainer } from "@/styles/pages/Success";
import Link from "next/link";

export default function Success() {
    return (
        <SuccessContainer>
            <h1>Compra Efectuada</h1>
            <ImageContainer></ImageContainer>
            <p>
                Uhuul <strong>Diego Fernandes</strong>, sua{" "}
                <strong>Camiseta Beyond the Limits</strong> já está a caminho da
                sua casa.
            </p>
            <Link href="/">Voltar ao catálogo</Link>
        </SuccessContainer>
    );
}
