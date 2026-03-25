import NES from "@/components/NES";
import nES from "@/styles/nES.module.css";
import { db } from "@/utils/dbconnection";

export default async function ProjectPage({ params }) {
  const { id } = await params;
  console.log(id);

  const dbCall = (
    await db.query(`SELECT * FROM portfolio_projects WHERE entry_id = $1`, [id])
  ).rows[0];
  console.log(dbCall);
  // const formatter = new Intl.DateTimeFormat(`en-UK`, {
  //   hour: `2-digit`,
  //   minute: `2-digit`,
  // });

  const projectDate = dbCall.entry_date.toLocaleDateString();

  return (
    <>
      <NES nES={nES} dbCall={dbCall} projectDate={projectDate} id={id} />
    </>
  );
}
