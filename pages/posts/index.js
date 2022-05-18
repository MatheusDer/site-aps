import { Fragment, useEffect, useState } from "react";
import NavbarLayout from "../../components/layout/navbar";
import { useRouter } from "next/router";

function PostsHomePage() {
  const [usuario, setUsuario] = useState();
  const router = useRouter();
  useEffect(() => {
    if (router.query.id == undefined) {
      router.push("/");
    }
    fetch(`/api/usuario/${router.query.id}`)
      .then((response) => response.json())
      .then((data) => {
        setUsuario(data.usuario);
      });
  }, []);

  return (
    <Fragment>
      <NavbarLayout />
      <div>
        <h1>Posts</h1>
        {usuario && usuario.apelido}
      </div>
    </Fragment>
  );
}

export default PostsHomePage;
