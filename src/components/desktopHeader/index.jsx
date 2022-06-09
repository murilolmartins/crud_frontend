import { Link, useHistory } from "react-router-dom";
import { Container } from "./style";
import logo from "../../assets/images/bemtevi.jpeg";
import logout from "./../../assets/images/Logout.png";
import { useUser } from "../../providers/user";

const DesktopHeader = ({ isDashBoard = false }) => {
  const { logOut } = useUser();
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
            <img src={logout} alt="" onClick={logOut} />
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
