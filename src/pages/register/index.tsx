import { Container } from "./style";
import { SmallContainer } from "./style";
import { Content } from "./style";
import Man from "../../assets/images/man.png";
import RegisterForm from "../../components/registerForm";
import DesktopHeader from "../../components/desktopHeader";

const Register = () => {
  return (
    <Container>
      <DesktopHeader></DesktopHeader>
      <SmallContainer>
        <div className="background_img">
          <img src={Man} alt="" />
        </div>
        <Content>
          <RegisterForm></RegisterForm>
        </Content>
      </SmallContainer>
    </Container>
  );
};

export default Register;
