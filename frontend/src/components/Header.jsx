import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../slices/authSlice";
import { useLogoutMutation } from "../slices/usersApiSlice";
const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApi] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApi().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };
  const profileHandler = async () => {
    try {
      await navigate("/profile");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to="/">
        MERN AUTHENTICATION
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {userInfo ? (
                <>
                  <NavDropdown title={userInfo.name} id="username">
                    <Nav.Link as={Link} to="/profile">
                      <NavDropdown.Item onClick={profileHandler}>
                        Profile
                      </NavDropdown.Item>
                    </Nav.Link>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">
                    <FaSignInAlt /> sign In
                  </Nav.Link>

                  <Nav.Link as={Link} to="/register">
                    <FaSignOutAlt /> Sign Up
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
