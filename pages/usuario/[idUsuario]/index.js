import { useRouter } from "next/router";
import { useState } from "react";
function ProfilePage() {
  const [usuario, setUsuario] = useState();
  const router = useRouter();

  if (router.query.idUsuario != undefined) {
    fetch(`/api/usuario/${router.query.idUsuario}`)
      .then((response) => response.json())
      .then((data) => {
        setUsuario(data.usuario);
      });
  }

  return (
    <div>
      <h1>Profile</h1>
      {usuario && usuario.id}
    </div>
  );
}

export default ProfilePage;
