import path from "path";
import fs from "fs";

export function getArquivoPost() {
  return path.join(process.cwd(), "data", "post.json");
}

export function getDadosPost(path) {
  return JSON.parse(fs.readFileSync(path));
}

export function getPostsPorImagemId(id) {
  const posts = getDadosPost(getArquivoPost());
  return posts.filter((p) => p.imagemId == id);
}

export function getPostsPorTenantId(id) {
  const posts = getDadosPost(getArquivoPost());
  return posts.filter((p) => p.tenantId == id);
}
