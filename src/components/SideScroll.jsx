"use client";
// react / next
import { useEffect, useRef, useState } from "react";
// motion
import { motion, useScroll, useTransform } from "motion/react";
// styles
import * as sideScroll from "@/styles/sideScroll.module.css";
import face from "@/../public/heroImage.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ImageComponent from "./ImageComponent";

export default function SideScroll({ route }) {
  const [entries, setEntries] = useState([" "]);
  const urlData = usePathname();
  const [scrollContent, setScrollContent] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(route);
        const data = await response.json();
        const dataSet = data.rows;
        // console.log(dataSet);
        setEntries(dataSet);
      } catch (error) {
        console.error("Failed to load data:", error);
      }
    }
    fetchProjects();
  }, [setEntries, route]);

  // scroll logic

  useEffect(() => {
    function setWidth() {
      const sC = (window.visualViewport.width / 100) * 40;
      // console.log(sC);
      if (sC) {
        setScrollContent(sC);
      }
    }
    setWidth();
    // repeats screen width check
    const pI = setInterval(setWidth, 1000);
    return () => clearInterval(pI);
  }, [scrollContent]);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Move from first item centered to last item centered
  const totalDistance = (entries?.length - 1) * scrollContent;

  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);

  function handleScrollTop() {
    window.scrollTo(top);
  }

  return (
    <>
      {urlData === "/" ? (
        <section className={sideScroll.intro_section}>
          <div className={sideScroll.hero}>
            <Image
              src={face}
              height={400}
              width={400}
              alt={"Annabel Peart"}
              loading="eager"
            />
          </div>
          <div>
            <h1>Annabel Peart</h1>
            <p>
              A budding Software Developer with strengths in both front-end and
              back-end JavaScript functionality.
            </p>
            <p>
              {" "}
              With an end-goal focus and a client driven perspective, I strive
              to provide the best results that I can; allowing my passions to
              take me to the finish line!
              {/* <Link href={`/about`}> Read More... </Link> */}
            </p>
            <h2>Portfolio Projects</h2>
          </div>{" "}
        </section>
      ) : urlData === "/project/bootcamp" ? (
        <section className={sideScroll.intro_section_bp}>
          <div>
            <h1>Bootcamp Projects</h1>
            <p>
              These projects were completed throughout my participation in the
              Tech Educators Software Development Bootcamp.
            </p>
            <p>
              Throughout the bootcamp I completed solo assignment projects which
              aided development of my personal knowledge and skills in web app
              development. Alongsise this, I completed group development and
              research projects, adopting the agile development methodology to
              progress the development of our app.
            </p>
          </div>
        </section>
      ) : null}
      {/* side scroll */}

      <div
        id="anchor"
        ref={containerRef}
        className={sideScroll.scroll_container}
      >
        <div className={sideScroll.sticky_wrapper}>
          <motion.div className={sideScroll.gallery} style={{ x }}>
            {entries?.length === 1 ? null : (
              <>
                {entries.map((entry) => (
                  <main
                    key={entry.entry_id}
                    className={sideScroll.gallery_item}
                  >
                    <div className={sideScroll.item_content}>
                      <section className={sideScroll.image_container}>
                        {entry?.screenshots[0].length > 0 ? (
                          <ImageComponent
                            c={sideScroll.image}
                            s={entry.screenshots[0]}
                            a={entry.entry_title}
                            w={400}
                            h={300}
                            l="eager"
                          />
                        ) : null}
                      </section>
                      <h2 className={`${sideScroll.item_text}`}>
                        {entry.entry_title}{" "}
                      </h2>{" "}
                      <section>
                        <aside>
                          <button
                            onClick={() =>
                              document.getElementById("anchor").scrollIntoView()
                            }
                            className="col-start-2 col-end-3 row-start-1 row-end-2"
                          ></button>
                          <button
                            onClick={() => window.scrollBy(0, +scrollContent)}
                            className="col-start-3 col-end-4 row-start-2 row-end-3"
                          ></button>
                          <button
                            onClick={() =>
                              window.scrollTo(0, document.body.scrollHeight)
                            }
                            className="col-start-2 col-end-3 row-start-3 row-end-4"
                          ></button>
                          <button
                            onClick={() => window.scrollBy(0, -scrollContent)}
                            className="col-start-1 col-end-2 row-start-2 row-end-3"
                          ></button>
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
                            href={`/project/${entry.entry_id}`}
                            className="self-start"
                          >
                            Details
                          </Link>
                        </nav>
                        <nav className={sideScroll.baseNav}>
                          <button onClick={handleScrollTop}>Back</button>

                          <Link target="_blank" href={entry.site}>
                            <button>Visit</button>
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
