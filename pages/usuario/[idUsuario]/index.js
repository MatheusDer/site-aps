import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import NavbarLayout from "../../../components/layout/navbar";
import { Tabs, Tab } from "react-bootstrap";
import Post from "../../../components/post";

function ProfilePage() {
  const router = useRouter();
  const [usuario, setUsuario] = useState();
  const [key, setKey] = useState("posts");
  const [posts, setPosts] = useState([]);

  if (router.query.idUsuario != undefined) {
    fetch(`/api/usuario/${router.query.idUsuario}`)
      .then((response) => response.json())
      .then((data) => {
        setUsuario(data.usuario);
      });
    useEffect(() => {
      if (key == "posts") {
        fetch(`/api/post/criados/${router.query.idUsuario}`)
          .then((r) => r.json())
          .then((d) => setPosts(d.posts));
      } else if (key == "favoritos") {
        fetch(`/api/post/${router.query.idUsuario}`)
          .then((r) => r.json())
          .then((d) => setPosts(d.posts));
      }
    }, [key]);
  }

  if (!usuario || !posts) {
    return <p>Loading...</p>;
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
      <Fragment>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="posts" title="Posts">
            <Post posts={posts} idUsuario={usuario.id} />
          </Tab>
          <Tab eventKey="favoritos" title="Favoritos">
            <Post posts={posts} idUsuario={usuario.id} />
          </Tab>
        </Tabs>
      </Fragment>
    </Fragment>
  );
}

export default ProfilePage;
