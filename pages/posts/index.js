import { Fragment, useEffect, useState } from "react";
import NavbarLayout from "../../components/layout/navbar";
import { useRouter } from "next/router";
import { Container, Card, Form, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import Post from "../../components/post";

function PostsHomePage() {
  const [idUsuario, setIdUsuario] = useState();
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (router.query.id == undefined) {
      router.push("/");
    }

    setIdUsuario(router.query.id);

    fetch("/api/post")
      .then((r) => r.json())
      .then((d) => {
        setPosts(d.posts);
      });
  }, []);

  return (
    <Fragment>
      <NavbarLayout idUsuario={idUsuario} />
      <Container className="mt-5 d-flex justify-content-center">
        <Row>
          {posts.map((post) => (
            <Col xl={12}>
              <Post
                tenantId={post.tenantId}
                imagem={post.imagem}
                imagemId={post.imagemId}
                descricao={post.descricao}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
}

export default PostsHomePage;
