import Link from "next/link";
import { useRef, useState } from "react";
import { Card, Button, Container, Form, Row, Col } from "react-bootstrap";
function Login() {
  const [loadedUsuario, setUsuario] = useState([]);
  const entradaEmail = useRef();
  const entradaSenha = useRef();

  function submitLoginHandler(event) {
    event.preventDefault();

    const email = entradaEmail.current.value;
    const senha = entradaSenha.current.value;

    fetch(`/api/usuario/${email}/${senha}`)
      .then((response) => response.json())
      .then((data) => setUsuario(data.usuario));
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xl={6}>
          <Card body className="p-4 shadow-lg">
            <Card.Title>
              <h1>Site APS</h1>
              <h2 className="mt-5">Entrar</h2>
            </Card.Title>
            <Form className="mt-4" onSubmit={submitLoginHandler} method="GET">
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Endereco de Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="nome@email.com"
                  ref={entradaEmail}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="senha">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="*******"
                  ref={entradaSenha}
                />
                <Form.Text className="text-muted">
                  Voce nao deve compartilhar sua senha!
                </Form.Text>
              </Form.Group>
              <div className="text-center">
                <Button
                  variant="outline-dark"
                  className="w-50 mt-4"
                  type="submit"
                >
                  Confirmar
                </Button>
              </div>
            </Form>
            <Card.Text className="mt-5">
              Nao possui uma conta? <Link href="/cadastro">Cadastre-se</Link>
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
