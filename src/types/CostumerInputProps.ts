import { NewCostumerFormSchema } from "@/schemas/NewCostumerFormSchema";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export type CostumerInputProps = {
  form: UseFormReturn<z.infer<typeof NewCostumerFormSchema>>;
  name:
    | "nome"
    | "cpf"
    | "dataDeNascimento"
    | "sexo"
    | "estadoCivil"
    | "naturalidade"
    | "telefone"
    | "cep"
    | "rua"
    | "numeroDaRua"
    | "complemento"
    | "estado"
    | "cidade"
    | "bairro"
    | "tipoDoDocumento"
    | "frenteDoDocumento"
    | "versoDoDocumento";
  label: string;
  placeholder?: string;
  className?: string;
};
