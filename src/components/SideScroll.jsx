"use client";
// react / next
import { useEffect, useRef, useState } from "react";
// motion
import { motion, useScroll, useTransform } from "motion/react";
// styles
import * as sideScroll from "@/styles/sideScroll.module.css";
import face from "@/../public/face.png";
import Image from "next/image";
import Link from "next/link";

export default function BootCampSideScroll() {
  const [entries, setEntries] = useState([" "]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("api/projects");
        const data = await response.json();
        const dataSet = data.rows;
        console.log(dataSet);
        setEntries(dataSet);
      } catch (error) {
        console.error("Failed to load data:", error);
      }
    }
    fetchProjects();
  }, [setEntries]);

  const ITEM_WIDTH = 700;

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Move from first item centered to last item centered
  const totalDistance = (entries?.length - 1) * ITEM_WIDTH;
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);

  return (
    <>
      <section className={sideScroll.intro_section}>
        <Image src={face} height={300} width={300} alt={"Annabel Peart"} />
        <div>
          <h1>Annabel Peart</h1>
          <p>
            Budding Software Developer with strengths in JavaScript
            functionality both front- and back-end; an end-goal focus, and a
            client driven perspective.
          </p>

          <Link href={`/about`}> Read More... </Link>
        </div>
      </section>
      {/* side scroll */}

      <div ref={containerRef} className={sideScroll.scroll_container}>
        <div className={sideScroll.sticky_wrapper}>
          <motion.div className={sideScroll.gallery} style={{ x }}>
            {entries.length === 1 ? null : (
              <>
                {entries.map((entry) => (
                  <main
                    key={entry.entry_id}
                    className={sideScroll.gallery_item}
                  >
                    <div className={sideScroll.item_content}>
                      <section className={sideScroll.image_container}>
                        {entry.screenshot_url ? (
                          <Image
                            className={sideScroll.image}
                            src={entry.screenshot_url}
                            alt={`image showing the web app ${entry.entry_title}`}
                            // fix the sizing it is a bit big rn
                            width={300}
                            height={200}
                          />
                        ) : (
                          <h2 className={sideScroll.image}>
                            {" "}
                            Image not provide, click here to navigate to project{" "}
                            {entry.entry_title}
                          </h2>
                        )}
                      </section>
                      <h2 className={`${sideScroll.item_text}`}>
                        {entry.entry_title}{" "}
                      </h2>{" "}
                      <aside className="col-start-1 col-end-2 row-start-4 row-end-5 ">
                        <div className="col-start-2 col-end-3 row-start-1 row-end-2"></div>
                        <div className="col-start-3 col-end-4 row-start-2 row-end-3"></div>
                        <div className="col-start-2 col-end-3 row-start-3 row-end-4"></div>
                        <div className="col-start-1 col-end-2 row-start-2 row-end-3"></div>
                      </aside>
                      <nav className={sideScroll.topNav}>
                        <Link href={""} className="self-end">
                          B
                        </Link>
                        <Link href={" "} className="self-start">
                          A
                        </Link>
                      </nav>
                      <nav className={sideScroll.baseNav}>
                        <Link href={entry.git} className=" ">
                          Git
                        </Link>
                        <Link href={`/project/${entry.entry_id}`} className=" ">
                          About
                        </Link>
                      </nav>
                    </div>
                  </main>
                ))}
              </>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}
