import { connectDB } from "../../../util/database";
import ListItem from "./listItem";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  if (result === null) return null;

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
}
