import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import NavbarLayout from "../../../components/layout/navbar";
import { Tabs, Tab, Row, Col, Button } from "react-bootstrap";
import Post from "../../../components/post";

function Favoritos() {
  const router = useRouter();
  const [usuario, setUsuario] = useState();
  const [key, setKey] = useState("posts");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (router.query.idUsuario != undefined) {
      fetch(`/api/usuario/${router.query.idUsuario}`)
        .then((response) => response.json())
        .then((data) => {
          setUsuario(data.usuario);
        });

      fetch(`/api/post/${router.query.idUsuario}`)
        .then((r) => r.json())
        .then((d) => setPosts(d.posts));
    }
  }, [key]);

  if (!usuario || !posts) {
    return <p>Loading...</p>;
  }

  function clickPostsHandler(event) {
    event.preventDefault();

    router.push(`/usuario/${usuario.id}`);
  }

  return (
    <Fragment>
      <NavbarLayout idUsuario={usuario.id} />
      <h1 className="mt-2">Profile</h1>
      <div className="mt-5">
        <p>
          <strong>Apelido: </strong>
          {usuario.apelido}
        </p>
        <p>
          <strong>Email: </strong>
          {usuario.email}
        </p>
      </div>
      <Row className="d-flex justify-content-center mt-5">
        <Col xl={4}>
          <Button className="w-100" onClick={clickPostsHandler}>
            Posts
          </Button>
        </Col>
        <Col xl={4}>
          <Button className="w-100" active>
            Favoritos
          </Button>
        </Col>
      </Row>
      <Post posts={posts} idUsuario={usuario.id} />
    </Fragment>
  );
}

export default Favoritos;
