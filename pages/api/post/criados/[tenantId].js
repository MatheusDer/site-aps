import { getPostsPorTenantId } from "../../../../helpers/post/api-utils";

function handler(req, res) {
  const id = req.query.tenantId;
  const post = getPostsPorTenantId(id);

  if (post) {
    res.status(200).json({ posts: post });
  }

  res.status(404).json({ msg: "o post nao existe" });
}

export default handler;
