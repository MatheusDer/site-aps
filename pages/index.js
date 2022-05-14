import Link from "next/link";
import { Card, Button, Container, Form, Row, Col } from "react-bootstrap";
function Login() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xl={6}>
          <Card body className="p-4 shadow-lg">
            <Card.Title>
              <h1>Site APS</h1>
            </Card.Title>
            <Form className="mt-5">
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Endereco de Email</Form.Label>
                <Form.Control type="email" placeholder="nome@email.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="senha">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="*******" />
                <Form.Text className="text-muted">
                  Voce nao deve compartilhar sua senha!
                </Form.Text>
              </Form.Group>
              <div className="text-center">
                <Button
                  type="submit"
                  variant="outline-dark"
                  className="w-50 mt-4"
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
    </Container>
  );
}

export default Login;
