import Link from "next/link";
import { useRef, useState } from "react";
import { Card, Button, Container, Form, Row, Col } from "react-bootstrap";
function Login() {
  const [loadedUsuario, setUsuario] = useState([]);
  const entradaEmail = useRef();
  const entradaSenha = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const email = entradaEmail.current.value;
    const senha = entradaSenha.current.value;

    fetch(`/api/usuario/${email}/${senha}`)
      .then((response) => response.json())
      .then((data) => setUsuario(data.usuario));
    // Create user logic
    // const email = entradaEmail.current.value;
    // const senha = entradaSenha.current.value;

    // const reqBody = { email: email, senha: senha };

    // fetch(`/api/usuario`, {
    //   method: "POST",
    //   body: JSON.stringify(reqBody),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xl={6}>
          <Card body className="p-4 shadow-lg">
            <Card.Title>
              <h1>Site APS</h1>
            </Card.Title>
            <Form className="mt-5" onSubmit={submitFormHandler} method="GET">
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
              Nao possui uma conta? <Link href="#">Cadastre-se</Link>
            </Card.Text>
          </Card>
        </Col>
      </Row>
      <ul>
        {loadedUsuario.map((usuario) => (
          <li key={usuario.id}>Logado</li>
        ))}
      </ul>
    </Container>
  );
}

export default Login;
