import nES from "@/styles/nES.module.css";
import { db } from "@/utils/dbconnection";
import Image from "next/image";
import Link from "next/link";

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
      <main className={nES.mainDisplay}>
        <section className={nES.windowDisplay}>
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

      <section className={nES.systemMain}>
        <div className={nES.console}>{/* buttons */}</div>

        <nav className={nES.gamePad}>
          {/* the left and right keys change the image */}
          <section className={nES.leftButtons}>
            <button
              className={`col-start-2 col-end-3 row-start-1 row-end-2`}
            ></button>
            <button
              className={`col-start-3 col-end-4 row-start-2 row-end-3`}
            ></button>
            <button
              className={`col-start-2 col-end-3 row-start-3 row-end-4`}
            ></button>
            <button
              className={`col-start-1 col-end-2 row-start-2 row-end-3`}
            ></button>
          </section>
          {/* vestigial? */}
          <section className={nES.centreButtons}>
            <button className={``}>Select</button>
            <button className={``}>Start</button>
          </section>
          {/* code and visit */}
          <section className={nES.rightButtons}>
            <Link target="_blank" href={dbCall.git} className="self-end">
              Code
            </Link>
            <Link target="_blank" href={dbCall.site} className="self-start">
              Visit
            </Link>
          </section>
        </nav>
      </section>
    </>
  );
}
