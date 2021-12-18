import { articles } from "../../../data";

export default handler = (req, res) => {
  res.status(200).json(articles);
};
