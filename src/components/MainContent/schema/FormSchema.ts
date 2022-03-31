import * as Yup from "yup";

const phoneNumber = /\([+1-9]{3}\) 9[0-9]\d{3} \d{4}/;
const instagram = /@[a-zA-z]/;
const date = /[0-9]\d{1} . [0-9]\d{1} . [0-9]\d{3}/
const cpf = /[0-9]\d{2} [0-9]\d{2} [0-9]\d{2} [0-9]\d{1}/;

export default Yup.object().shape({
  name: Yup.string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .required("Campo Obrigatório"),
  email: Yup.string().required("Campo Obrigatório").email("E-mail inválido"),
  cpf: Yup.string()
    .required("Campo obrigatório")
    .matches(cpf, "Formato de CPF inválido"),
  date: Yup.string().required("Campo obrigatório").matches(date, "Insira uma data válida"),
  tel: Yup.string()
    .required("Campo Obrigatório")
    .matches(phoneNumber, "Formato de número Inválido"),
  instagram: Yup.string()
    .required("Campo obrigatório")
    .matches(instagram, "Formato de instagram Inválido"),
});
