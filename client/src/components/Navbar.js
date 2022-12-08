import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navbar1({ buyer, setBuyer }) {
  // logout function
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      setBuyer(null);
    });
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
      <Container className="nav1" style={{}}>
        <Navbar.Brand href="#home">VILLA REAL ESTATE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="" as={Link} to={"/home"}>
              Home
            </Nav.Link>
            <Nav.Link className="" as={Link} to={"/about"}>
              About
            </Nav.Link>
          </Nav>
          <Nav>
            {buyer ? (
              <Nav.Link
                className=""
                as={Link}
                to={"/signin"}
                onClick={handleLogout}
              >
                SignOut
              </Nav.Link>
            ) : (
              <>
                <Nav.Link className="" as={Link} to={"/signin"}>
                  SignIn
                </Nav.Link>
                <Nav.Link className="" as={Link} to={"/signup"}>
                  SignUp
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;