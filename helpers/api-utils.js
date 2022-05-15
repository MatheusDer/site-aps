import path from "path";
import fs from "fs";

export function getArquivoUsuario() {
  return path.join(process.cwd(), "data", "usuario.json");
}

export function getDadosUsuario(path) {
  return JSON.parse(fs.readFileSync(path));
}
