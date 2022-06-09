import { Container, SmallContainer, Content } from "./style";
import ThinkingGirl from "../../assets/images/girl-thinking.png";
import LoginForm from "../../components/loginForm";
import DesktopHeader from "../../components/desktopHeader";

const Login = () => {
  return (
    <Container>
      <DesktopHeader></DesktopHeader>
      <SmallContainer>
        <div className="background_img">
          <img src={ThinkingGirl} alt="" />
        </div>
        <Content>
          <LoginForm></LoginForm>
        </Content>
      </SmallContainer>
    </Container>
  );
};

export default Login;
