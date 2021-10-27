import { Navbar, Nav, Container, Button, Image } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "../css/Header.css";

function Header() {
  let history = useHistory();

  const handleClick = () => {
    history.push("/contact");
  };

  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        className="navbarHeader shadow-sm p-3 bg-body rounded"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <Image
                className="logo"
                src="../assets/logo-ALTA@2x.png"
                alt="logo alterra academy"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mb-2 mb-lg-0 mx-5">
              <Nav>
                <Link
                  style={{ color: "#F47522" }}
                  className="mx-3 linkAja"
                  to="/"
                >
                  Home
                </Link>
              </Nav>
              <Nav>
                <Link className="mx-3 linkAja" to="#">
                  About
                </Link>
              </Nav>
              <Nav>
                <Link className="mx-3 linkAja" to="/team">
                  Team
                </Link>
              </Nav>
              <Nav>
                <Link className="mx-3 linkAja" to="/blog">
                  Blog
                </Link>
              </Nav>
            </Nav>
            <Button
              className="buttonHeader"
              variant="outline-warning"
              onClick={() => handleClick()}
            >
              Contact
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
