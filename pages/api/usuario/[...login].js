import { getArquivoUsuario, getDadosUsuario } from "../../../helpers/api-utils";

function handler(req, res) {
  const email = req.query.login[0];
  const senha = req.query.login[1];

  const path = getArquivoUsuario();
  const data = getDadosUsuario(path);

  const usuario = data.filter(
    (usuario) => usuario.email == email && usuario.senha == senha
  );

  let valido = false;
  if (usuario.length === 1) {
    valido = true;
  }

  res.status(200).json({ usuario: usuario, valido: valido });
}

export default handler;
