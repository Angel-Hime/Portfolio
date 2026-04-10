import IntroBlock from "@/components/IntroBlock";
import * as sideScroll from "@/styles/sideScroll.module.css";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <section className={sideScroll.intro_section}>
        <IntroBlock sideScroll={sideScroll} />
      </section>
      <h2 className={sideScroll.storyHeading}>So, What's My Story...?</h2>
      <section className={sideScroll.textBlock} data-scroll-behavior="smooth">
        <p>
          My interest in development started with my love for the internet, the
          interconnected existence of the modern world; not just the websites I
          traversed in my youth but the internet of things that comes with it
          too.
        </p>
        <br />
        <p>
          As a lover of technology, video games, and research I found myself
          constantly online but. So, after completing my law degree and working
          in the legal sector for some time, I felt that I wanted to pursue
          development further.
        </p>
        <br />
        <p>
          I completed some solo learning, then some guided learning through{" "}
          <Link
            className={sideScroll.linkTo}
            href={"https://codefirstgirls.com/"}
            target="_blank"
          >
            Code First Girls
          </Link>
          , and finally I was able to complete a software development bootcamp
          through Tech Educators.
        </p>
        <br />
        <p>
          Having completed the{" "}
          <Link
            className={sideScroll.linkTo}
            href={"https://codefirstgirls.com/"}
            target="_blank"
          >
            Tech Educators
          </Link>{" "}
          Software Development Bootcamp with a distinction I wish to progress my
          career.
        </p>
      </section>
    </>
  );
}
