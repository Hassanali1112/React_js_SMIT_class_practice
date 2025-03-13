import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router";

function NavbarCom() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="d-flex border border-danger">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto border border-info">
            <Nav.Link href="#home">
              <Link to={"/"}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/about"}>About</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Link to={"/contact"}>Contact</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      {/* <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
    </>
  );
}

export default NavbarCom;
