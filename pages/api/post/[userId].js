import { getPostsFavoritos } from "../../../helpers/favorito/api-utils";

function handler(req, res) {
  const posts = getPostsFavoritos(req.query.userId);
  res.status(200).json({ posts: posts });
}

export default handler;
