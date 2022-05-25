import { Fragment, useEffect, useState } from "react";
import NavbarLayout from "../../components/layout/navbar";
import { useRouter } from "next/router";
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
      <NavbarLayout idUsuario={idUsuario && idUsuario} />
      <Post posts={posts} idUsuario={idUsuario} />
    </Fragment>
  );
}

export default PostsHomePage;
