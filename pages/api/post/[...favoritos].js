import {
  adicionarFavorito,
  isFavorito,
  removerFavorito,
} from "../../../helpers/favorito/api-utils";

function handler(req, res) {
  const tenantId = req.query.favoritos[0];
  const imagemId = req.query.favoritos[1];

  const favorito = isFavorito(tenantId, imagemId);

  if (req.method == "POST") {
    if (favorito) {
      removerFavorito(tenantId, imagemId);
      return res.status(201).json({ favorito: false });
    }

    adicionarFavorito(tenantId, imagemId);
    return res.status(201).json({ favorito: true });
  }

  res.status(200).json({ favorito: favorito });
}

export default handler;
