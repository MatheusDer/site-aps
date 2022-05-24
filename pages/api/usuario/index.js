import {
  getArquivoUsuario,
  getDadosUsuario,
} from "../../../helpers/usuario/api-utils";
import fs from "fs";

function handler(req, res) {
  function validarDados(dados, usuarios) {
    const [apelido, email, senha, confirmarSenha] = dados;
    let alertas = [];

    usuarios.forEach((usuario) => {
      if (usuario.apelido == apelido) {
        alertas.push("Apelido ja existe! Escolha outro!");
      }
      if (usuario.email == email) {
        alertas.push("Email ja existe! Escolha outro!");
      }
    });

    if (senha != confirmarSenha) {
      alertas.push("As senhas devem ser iguais!");
    }

    return alertas;
  }

  const path = getArquivoUsuario();
  const data = getDadosUsuario(path);

  if (req.method === "POST") {
    const apelido = req.body.apelido;
    const email = req.body.email;
    const senha = req.body.senha;
    const confirmarSenha = req.body.confirmarSenha;

    const erros = validarDados([apelido, email, senha, confirmarSenha], data);
    if (erros.length !== 0) {
      return res.status(400).json({ criado: false, alertas: erros });
    }

    const novoUsuario = {
      id: new Date().toISOString(),
      apelido: apelido,
      email: email,
      senha: senha,
    };
    data.push(novoUsuario);

    fs.writeFileSync(path, JSON.stringify(data));

    return res.status(201).json({ criado: true, alertas: [] });
  }

  return res.status(200).json({ usuarios: data });
}

export default handler;
