import Button from "../button";
import Input from "./../Input";
import { Container, Form, Title, Errors } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ContainerInput } from "../registerForm/style";
import { useHistory } from "react-router-dom";
import { useUser } from "../../providers/user";

const LoginForm = () => {
  const schema = yup.object().shape({
    email: yup.string().required("email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });
  const history = useHistory();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { login } = useUser();

  return (
    <Container>
      <Title>Entrar com uma conta existente</Title>
      <Form onSubmit={handleSubmit(login)}>
        <ContainerInput>
          <Input
            type="text"
            placeholder="Email"
            register={register}
            name="email"
          />
          <Errors>{errors.email?.message}</Errors>
        </ContainerInput>
        <ContainerInput>
          <Input
            type="password"
            placeholder="Senha"
            register={register}
            name="password"
          />
          <Errors>{errors.password?.message}</Errors>
        </ContainerInput>
        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
};
export default LoginForm;
