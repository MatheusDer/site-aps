import { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

function PostItem(props) {
  const [apelido, setApelido] = useState();
  const [isFavorito, setFavorito] = useState(false);
  useEffect(() => {
    fetch(`/api/usuario/${props.tenantId}`)
      .then((r) => r.json())
      .then((d) => {
        setApelido(d.usuario.apelido);
      });

    fetch(`/api/post/${props.idUsuario}/${props.imagemId}`, {})
      .then((r) => r.json())
      .then((d) => setFavorito(d.favorito));
  }, []);

  function clickHandler(event) {
    event.preventDefault();

    fetch(`/api/post/${props.idUsuario}/${props.imagemId}`, {
      method: "POST",
    })
      .then((r) => r.json())
      .then((d) => setFavorito(d.favorito));

    console.log("click");
  }

  if (!apelido) {
    return <p>Loading...</p>;
  }

  return (
    <Card className="shadow-lg w-75 mx-auto mb-5">
      <Card.Title className="mt-2 mb-4">{apelido && apelido}</Card.Title>
      <Card.Img variant="top" src={props.imagem} style={{ height: "30rem" }} />
      <Card.Body>
        <Card.Text className="mt-3 text-muted">{props.descricao}</Card.Text>
        <div className="d-flex justify-content-end">
          <Form>
            <input
              type="checkbox"
              class="btn-check"
              id={props.imagemId}
              autocomplete="off"
              onChange={clickHandler}
              checked={isFavorito}
            />
            <label class="btn btn-outline-danger" htmlFor={props.imagemId}>
              <i class="bi bi-heart"></i>
            </label>
            <br />
          </Form>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PostItem;
