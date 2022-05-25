import Link from "next/link";
import { Container, Navbar, Nav } from "react-bootstrap";

function NavbarLayout(props) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href={`/posts?id=${props.idUsuario}`}>
          Site APS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link href={`/posts?id=${props.idUsuario}`}>
              <a className="me-4 nav-link">Home</a>
            </Link>
            <Link href={`/usuario/${props.idUsuario}`}>
              <a className="me-4 nav-link">Profile</a>
            </Link>
            <Link href={`/criar-post/${props.idUsuario}`}>
              <a className="me-4 nav-link">Criar Post</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLayout;
