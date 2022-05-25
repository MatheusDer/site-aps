import { Container, Row, Col } from "react-bootstrap";
import PostItem from "./post-item";

function Post(props) {
  const { posts } = props;
  if (!props.idUsuario) {
    return <p>Loading...</p>;
  }

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Row>
        {posts.map((post) => (
          <Col xl={12} key={post.imagemId}>
            <PostItem
              idUsuario={props.idUsuario}
              tenantId={post.tenantId}
              imagem={post.imagem}
              imagemId={post.imagemId}
              descricao={post.descricao}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Post;
