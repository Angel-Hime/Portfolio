import computerScreen from "@/styles/computerScreen.module.css";
import { db } from "@/utils/dbconnection";
import Image from "next/image";

export default async function ProjectPage({ params }) {
  const { id } = await params;
  console.log(id);

  const dbCall = (
    await db.query(`SELECT * FROM project_blog WHERE entry_id = $1`, [id])
  ).rows[0];
  console.log(dbCall);
  const formatter = new Intl.DateTimeFormat(`en-UK`, {
    hour: `2-digit`,
    minute: `2-digit`,
  });

  return (
    <>
      <main className={computerScreen.mainDisplay}>
        <section className={computerScreen.windowDisplay}>
          <section>
            <h1>Project Title: {dbCall.entry_title}</h1>
            {dbCall.screenshot_url ? (
              <Image
                src={dbCall.screenshot_url}
                alt={`image showing the web app ${dbCall.entry_title}`}
                width={700}
                height={300}
              />
            ) : (
              <h2>
                {" "}
                Image not provide, click edit to update project: &quot;
                {dbCall.entry_title}&quot;
              </h2>
            )}

            <p className="">Completion Date:</p>
            <p>{dbCall.entry_date.toLocaleDateString()}</p>
            <p className="">Project Requirements & Stretch Goals:</p>
            <p className="mb-5 ">{dbCall.entry_content}</p>
          </section>
        </section>
      </main>

      <section className={computerScreen.boardDisplay}>
        {/* the left and right keys change the image */}
        <button>Left</button>
        <button>Right</button>
      </section>
    </>
  );
}
