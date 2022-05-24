import fs from "fs";

import { getArquivoPost, getDadosPost } from "../../../helpers/post/api-utils";

function handler(req, res) {
  const path = getArquivoPost();
  const data = getDadosPost(path);

  if (req.method === "POST") {
    const tenantId = req.body.tenantId;
    const imagem = req.body.imagem;
    const descricao = req.body.descricao;

    const novoPost = {
      imagemId: new Date().toISOString(),
      tenantId: tenantId,
      descricao: descricao || "sem descricao",
      imagem: imagem,
    };

    console.log(novoPost);

    data.push(novoPost);

    fs.writeFileSync(path, JSON.stringify(data));

    return res.status(201).json({ msg: "Post criado" });
  }

  return res.status(200).json({ posts: data });
}

export default handler;
