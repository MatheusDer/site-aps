import path from "path";
import fs from "fs";

export function getArquivoPost() {
  return path.join(process.cwd(), "data", "post.json");
}

export function getDadosPost(path) {
  return JSON.parse(fs.readFileSync(path));
}

export function getPostPorId(id) {
  const usuarios = getDadosUsuario(getArquivoUsuario());
  return usuarios.filter((p) => p.id == id)[0];
}
