import { db } from "@/utils/dbconnection";

export async function GET(req, res) {
  // connect first before anything else
  const client = await db.connect();

  try {
    // get user from db

    const dbCall = await client.query(
      `SELECT * FROM project_blog ORDER BY entry_date`,
    );
    // console.log(dbCall);
    return Response.json(dbCall);
    //
  } catch (error) {
    console.error("Database error:", error.message);
    return Response.json(
      { error: "Failed to fetch program", details: error.message },
      { status: 500 },
    );
  } finally {
    client.release();
  }
}
