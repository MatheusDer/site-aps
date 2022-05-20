import { Fragment, useEffect, useState } from "react";
import NavbarLayout from "../../components/layout/navbar";
import { useRouter } from "next/router";

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
      <div>
        <h1>Posts</h1>
      </div>
    </Fragment>
  );
}

export default PostsHomePage;
