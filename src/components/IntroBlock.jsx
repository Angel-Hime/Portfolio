import face from "@/../public/heroImage.png";
import Image from "next/image";
import Link from "next/link";

export default function IntroBlock({ sideScroll, urlData }) {
  return (
    <>
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
          With an end-goal focus and a client driven perspective, I strive to
          provide the best results that I can; allowing my passions to take me
          to the finish line!
          {urlData === "/" ? (
            <Link className={sideScroll.linkTo} href={`/about`}>
              {" "}
              Read More...{" "}
            </Link>
          ) : urlData !== "/" ? null : null}
        </p>
      </div>
    </>
  );
}
