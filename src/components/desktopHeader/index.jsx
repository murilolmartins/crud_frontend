import { Link, useHistory } from "react-router-dom";
import { Container } from "./style";
import logo from "../../assets/images/bemtevi.jpeg";
import logout from "./../../assets/images/Logout.png";

const DesktopHeader = ({ isDashBoard = false }) => {
  const history = useHistory();
  return (
    <>
      {isDashBoard ? (
        <Container>
          <figure
            onClick={() => {
              history.push("/dashboard");
            }}
          >
            <img src={logo} alt="Logo" />
          </figure>
          <div className="links">
            <img src={logout} alt="" />
          </div>
        </Container>
      ) : (
        <Container>
          <figure>
            <img src={logo} alt="Logo" />
          </figure>
          <div className="links">
            <Link to="/">Login</Link>
            <Link to="/register">Register</Link>
          </div>
          {isDashBoard && (
            <figure>
              <img src={logout} alt="Logo" />
            </figure>
          )}
        </Container>
      )}
    </>
  );
};
export default DesktopHeader;
