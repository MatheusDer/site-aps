import {
  Container,
  Card,
  Form,
  Row,
  Col,
  Button,
  Alert,
} from "react-bootstrap";
import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function CadastroPage() {
  const router = useRouter();
  const [isUsuarioCriado, setUsuarioCriado] = useState(false);
  const [alertas, setAlertas] = useState([]);

  const entradaApelido = useRef();
  const entradaEmail = useRef();
  const entradaSenha = useRef();
  const entradaConfirmarSenha = useRef();

  function submitCadastroHandler(event) {
    event.preventDefault();

    const apelido = entradaApelido.current.value;
    const email = entradaEmail.current.value;
    const senha = entradaSenha.current.value;
    const confirmarSenha = entradaConfirmarSenha.current.value;

    const reqBody = {
      apelido: apelido,
      email: email,
      senha: senha,
      confirmarSenha: confirmarSenha,
    };

    fetch(`/api/usuario`, {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.criado) {
          router.push("/");
        }
        setAlertas(data.alertas);
      });
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xl={6}>
          {alertas.map((alerta) => (
            <Alert variant="danger">{alerta}</Alert>
          ))}
          <Card body className="p-4 shadow-lg">
            <Card.Title>
              <h1>Site APS</h1>
              <h2 className="mt-5">Cadastre-se</h2>
            </Card.Title>
            <Form className="mt-4" onSubmit={submitCadastroHandler}>
              <Form.Group className="mb-3" controlId="apelido">
                <Form.Label>Apelido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="der"
                  ref={entradaApelido}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Endereco de Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="nome@email.com"
                  ref={entradaEmail}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="senha">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="*******"
                  ref={entradaSenha}
                  required
                />
                <Form.Text className="text-muted">
                  Voce nao deve compartilhar sua senha!
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="confirmarSenha">
                <Form.Label>Confirmar Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="*******"
                  ref={entradaConfirmarSenha}
                  required
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
              Ja possui uma conta? <Link href="/">Entre</Link>
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CadastroPage;
