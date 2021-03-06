import { useRouter } from "next/router";
import { Fragment, useRef } from "react";
import {
  Container,
  Card,
  Form,
  Alert,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import NavbarLayout from "../../components/layout/navbar";

function CreatePost() {
  const router = useRouter();
  const idUsuario = router.query.id;

  const entradaDescricao = useRef();
  const entradaImagem = useRef();

  function submitCriarPostHandler(event) {
    event.preventDefault();

    const descricao = entradaDescricao.current.value;
    const imagem = entradaImagem.current.value;

    const reqBody = {
      imagem: imagem,
      descricao: descricao,
      tenantId: router.query.id,
    };

    fetch("/api/post", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-type": "application/json",
      },
    });

    router.push(`/posts?id=${idUsuario}`);
  }
  return (
    <Fragment>
      <NavbarLayout idUsuario={idUsuario} />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xl={6}>
            <Card body className="p-4 shadow-lg">
              <Card.Title>
                <h1>Site APS</h1>
                <h2 className="mt-5">Criar Post</h2>
              </Card.Title>
              <Form className="mt-4" onSubmit={submitCriarPostHandler}>
                <Form.Group className="mb-3" controlId="descricao">
                  <Form.Label>Descricao</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Descricao para o post!"
                    ref={entradaDescricao}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="imagem">
                  <Form.Label>Link da Imagem</Form.Label>
                  <Form.Control type="text" ref={entradaImagem} required />
                </Form.Group>
                <div className="text-center">
                  <Button
                    variant="outline-dark"
                    className="w-50 mt-4"
                    type="submit"
                  >
                    Postar
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default CreatePost;
