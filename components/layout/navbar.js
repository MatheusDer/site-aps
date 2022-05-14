import { Container, Navbar, Nav } from "react-bootstrap";

function NavbarLayout() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/posts">Site APS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/posts" className="me-4">
              Home
            </Nav.Link>
            <Nav.Link href="/usuario" className="me-4">
              Profile
            </Nav.Link>
            <Nav.Link href="/criar-post" className="me-4">
              Criar Post
            </Nav.Link>
            <Nav.Link href="/sobre" className="me-4">
              Sobre
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLayout;
