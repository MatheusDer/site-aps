import { getArquivoUsuario, getDadosUsuario } from "../../../helpers/api-utils";
import fs from "fs";

function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const senha = req.body.senha;

    const novoUsuario = {
      id: new Date().toISOString(),
      email: email,
      senha: senha,
    };

    const path = getArquivoUsuario();
    const data = getDadosUsuario(path);

    const usuarioExistente = data.filter((usuario) => usuario.email == email);
    if (usuarioExistente.length === 0) {
      data.push(novoUsuario);
    }

    fs.writeFileSync(path, JSON.stringify(data));

    res.status(201).json({ usuario: novoUsuario });
  }
}

export default handler;
