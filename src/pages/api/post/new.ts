import { connectDB } from "../../../../util/database";

export default async function handler(req: any, res: any) {
  if (req.method == "POST") {
    if (req.body.title == "") {
      return res.status(500).json("제목써라");
    }
    try {
      let db = (await connectDB).db("forum");
      let result = db.collection("post").insertOne(req.body);
      res.redirect(302, "/list");
    } catch (error) {}
  }
}
