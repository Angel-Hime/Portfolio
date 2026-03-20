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
import { usePathname } from "next/navigation";

export default function SideScroll({ route }) {
  const [entries, setEntries] = useState([" "]);
  const urlData = usePathname();

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(route);
        const data = await response.json();
        const dataSet = data.rows;
        console.log(dataSet);
        setEntries(dataSet);
      } catch (error) {
        console.error("Failed to load data:", error);
      }
    }
    fetchProjects();
  }, [setEntries, route]);

  // scroll logic
  const ITEM_WIDTH = 775;

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Move from first item centered to last item centered
  const totalDistance = (entries?.length - 1) * ITEM_WIDTH;

  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);

  function handleScrollTop() {
    window.scrollTo(top);
  }

  return (
    <>
      {urlData === "/" ? (
        <section className={sideScroll.intro_section}>
          <div className={sideScroll.hero}>
            <section>Software Developer</section>
            <Image src={face} height={300} width={300} alt={"Annabel Peart"} />
          </div>
          <div>
            <h1>Annabel Peart</h1>
            <p>
              Budding Software Developer with strengths in both front-end and
              back-end JavaScript functionality; boasting an end-goal focus, and
              a client driven perspective.{" "}
              <Link href={`/about`}> Read More... </Link>
            </p>
          </div>{" "}
        </section>
      ) : urlData === "/project/bootcamp" ? (
        <section className={sideScroll.intro_section}>
          <div>
            <h1>Bootcamp Projects</h1>
            <p>
              These projects were completed throughout my participation in the
              Tech Educators Software Development Bootcamp.
            </p>
          </div>
        </section>
      ) : null}
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
                        {/* component which is just a image
                        component has props: entry.screenshot_url + handler? + sideScroll. (styles) */}
                        {entry.screenshot_url ? (
                          <Image
                            className={sideScroll.image}
                            src={entry.screenshot_url}
                            alt={`image showing the web app ${entry.entry_title}`}
                            // fix the sizing it is a bit big rn
                            width={500}
                            height={500}
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
                      <section>
                        <aside>
                          <div className="col-start-2 col-end-3 row-start-1 row-end-2"></div>
                          <div className="col-start-3 col-end-4 row-start-2 row-end-3"></div>
                          <div className="col-start-2 col-end-3 row-start-3 row-end-4"></div>
                          <div className="col-start-1 col-end-2 row-start-2 row-end-3"></div>
                        </aside>
                        <nav className={sideScroll.topNav}>
                          <Link
                            target="_blank"
                            href={entry.git}
                            className="self-end"
                          >
                            Code
                          </Link>
                          <Link
                            target="_blank"
                            href={entry.site}
                            className="self-start"
                          >
                            Visit
                          </Link>
                        </nav>
                        <nav className={sideScroll.baseNav}>
                          <button onClick={handleScrollTop}>Back</button>

                          <Link href={`/project/${entry.entry_id}`}>
                            <button>Details</button>
                          </Link>
                        </nav>
                      </section>
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
