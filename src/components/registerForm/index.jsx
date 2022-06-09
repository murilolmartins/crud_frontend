import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ContainerRegister, ContainerInput } from "./style";
import { Title, Form, Errors } from "../loginForm/styles";
import Input from "../Input/index";
import Button from "../button/index";
import { useUser } from "../../providers/user";
export default function RegisterForm() {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome de usuário obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .required("Senha obrigatória"),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });
  const { createUser } = useUser();

  return (
    <ContainerRegister>
      <Title>Criar uma nova conta</Title>
      <Form onSubmit={handleSubmit(createUser)}>
        <ContainerInput>
          <Input
            placeholder="Nome de usuário"
            register={register}
            name="name"
          />
          <Errors> {errors.name && errors.name.message} </Errors>
        </ContainerInput>
        <ContainerInput>
          <Input
            placeholder="Endereço de email"
            register={register}
            name="email"
          />
          <Errors>{errors.email && errors.email.message} </Errors>
        </ContainerInput>
        <ContainerInput>
          <Input
            placeholder="Senha"
            register={register}
            name="password"
            type="password"
          />
          <Errors> {errors.password && errors.password.message} </Errors>
        </ContainerInput>
        <Button type="submit"> Enviar </Button>
      </Form>
    </ContainerRegister>
  );
}
