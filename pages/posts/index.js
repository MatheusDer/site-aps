import { Fragment, useEffect } from "react";
import NavbarLayout from "../../components/layout/navbar";
import { useRouter } from "next/router";

function PostsHomePage() {
  const router = useRouter();
  useEffect(() => {
    if (router.query.id == undefined) {
      router.push("/");
    }
  }, []);
  return (
    <Fragment>
      <NavbarLayout />
      <div>
        <h1>Posts</h1>
      </div>
    </Fragment>
  );
}

export default PostsHomePage;
