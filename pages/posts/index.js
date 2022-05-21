import { Fragment, useEffect, useState } from "react";
import NavbarLayout from "../../components/layout/navbar";
import { useRouter } from "next/router";
import { Container, Card, Form, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

function PostsHomePage() {
  const [idUsuario, setIdUsuario] = useState();
  const router = useRouter();
  useEffect(() => {
    if (router.query.id == undefined) {
      router.push("/");
    }

    setIdUsuario(router.query.id);
  }, []);

  return (
    <Fragment>
      <NavbarLayout idUsuario={idUsuario} />
      <Container className="mt-5 d-flex justify-content-center">
        <Row>
          <Col xl={12}>
            <Card className="shadow-lg w-75 mx-auto mb-5">
              <Card.Title className="mt-2 mb-4">
                Nome do Criador do Post
              </Card.Title>
              <Card.Img variant="top" src="https://picsum.photos/600/400" />
              <Card.Body>
                <Card.Text className="mt-3 text-muted">
                  Descricao do Post
                </Card.Text>
                <div className="d-flex justify-content-end">
                  <Form className="mt-5">
                    <input
                      type="checkbox"
                      class="btn-check"
                      id="btn-check-outlined"
                      autocomplete="off"
                    />
                    <label
                      class="btn btn-outline-danger"
                      htmlFor="btn-check-outlined"
                    >
                      <i class="bi bi-heart"></i>
                    </label>
                    <br />
                  </Form>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={12}>
            <Card className="shadow-lg w-75 mx-auto mb-5">
              <Card.Title className="mt-2 mb-4">
                Nome do Criador do Post
              </Card.Title>
              <Card.Img variant="top" src="https://picsum.photos/600/400" />
              <Card.Body>
                <Card.Text className="mt-3 text-muted">
                  Descricao do Post
                </Card.Text>
                <div className="d-flex justify-content-end">
                  <Form className="mt-5">
                    <input
                      type="checkbox"
                      class="btn-check"
                      id="btn-check-outlined"
                      autocomplete="off"
                    />
                    <label
                      class="btn btn-outline-danger"
                      htmlFor="btn-check-outlined"
                    >
                      <i class="bi bi-heart"></i>
                    </label>
                    <br />
                  </Form>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default PostsHomePage;
