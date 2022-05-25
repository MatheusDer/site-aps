import path from "path";
import fs from "fs";
import { getPostsPorImagemId } from "../post/api-utils";

export function getArquivoFavoritos() {
  return path.join(process.cwd(), "data", "favoritos.json");
}

export function getDadosFavoritos(path) {
  return JSON.parse(fs.readFileSync(path));
}

export function isFavorito(tenantId, imagemId) {
  let favoritos = getDadosFavoritos(getArquivoFavoritos());
  favoritos = favoritos.filter(
    (f) => f.tenantId == tenantId && f.imagemId == imagemId
  )[0];

  if (favoritos) {
    return true;
  }

  return false;
}

export function adicionarFavorito(tenantId, imagemId) {
  const path = getArquivoFavoritos();
  const favoritos = getDadosFavoritos(path);
  favoritos.push({
    tenantId: tenantId,
    imagemId: imagemId,
  });

  fs.writeFileSync(path, JSON.stringify(favoritos));
}

export function removerFavorito(tenantId, imagemId) {
  const path = getArquivoFavoritos();
  const favoritos = getDadosFavoritos(path);

  for (var i = 0; i < favoritos.length; i++) {
    if (
      favoritos[i].tenantId == tenantId &&
      favoritos[i].imagemId == imagemId
    ) {
      favoritos.splice(i, 1);
      break;
    }
  }

  fs.writeFileSync(path, JSON.stringify(favoritos));
}

export function getPostsFavoritos(userId) {
  const path = getArquivoFavoritos();
  const favoritos = getDadosFavoritos(path);

  let imagemIds = [];
  favoritos.map((favorito) => {
    if (favorito.tenantId == userId) {
      imagemIds.push(favorito.imagemId);
    }
  });

  let postsFavoritados = [];
  imagemIds.map((id) => {
    postsFavoritados.push(getPostsPorImagemId(id)[0]);
  });

  return postsFavoritados;
}
