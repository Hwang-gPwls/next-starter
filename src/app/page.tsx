import { connectDB } from "../../util/database";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("forum");

  return <div>안녕하삼</div>;
}
