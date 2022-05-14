import { Container, Navbar, Nav } from "react-bootstrap";

function NavbarLayout() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/posts">Site APS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/posts" className="me-3">
              Home
            </Nav.Link>
            <Nav.Link href="/usuario" className="me-3">
              Profile
            </Nav.Link>
            <Nav.Link href="/sobre" className="me-3">
              Sobre
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLayout;
