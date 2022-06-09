import Container from "./styles";
const Input = ({register,name,...rest}) => {
  return <Container {...rest} {...register(name)}/>;
};
export default Input;
