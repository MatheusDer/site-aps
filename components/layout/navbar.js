import Link from "next/link";
import { Container, Navbar, Nav } from "react-bootstrap";

function NavbarLayout(props) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/posts">Site APS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/posts">
              <a className="me-4 nav-link">Home</a>
            </Link>
            <Link href={`/usuario/${props.idUsuario}`}>
              <a className="me-4 nav-link">Profile</a>
            </Link>
            <Link href="/criar-post">
              <a className="me-4 nav-link">Criar Post</a>
            </Link>
            <Link href="/sobre">
              <a className="me-4 nav-link">Sobre</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLayout;
