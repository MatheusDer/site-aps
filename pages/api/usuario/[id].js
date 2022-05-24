import { getUsuarioPorId } from "../../../helpers/usuario/api-utils";

function handler(req, res) {
  const id = req.query.id;
  const usuario = getUsuarioPorId(id);

  if (usuario == undefined) {
    return res
      .status(400)
      .json({ message: `Usuario com id: ${id} nao existe` });
  }

  return res.status(200).json({ usuario: usuario });
}

export default handler;
