import { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";

function Post(props) {
  const [apelido, setApelido] = useState();
  useEffect(() => {
    fetch(`/api/usuario/${props.tenantId}`)
      .then((r) => r.json())
      .then((d) => {
        setApelido(d.usuario.apelido);
        console.log(d.usuario.apelido);
      });
  }, []);

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
              id={props.idImagem} //TODO
              autocomplete="off"
            />
            <label class="btn btn-outline-danger" htmlFor="btn-check-outlined">
              <i class="bi bi-heart"></i>
            </label>
            <br />
          </Form>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Post;
