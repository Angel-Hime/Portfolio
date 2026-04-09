import * as about from "@/styles/aboutPage.module.css";

export default function AboutPage() {
  return (
    <div className={about.page}>
      <section>
        <h1>Annabel Peart</h1>
        <h2>Software Developer</h2>
      </section>
      <main>
        <p>
          My interest in development started with my love for the internet, the
          interconnected existence of the modern world, and not just the
          websites I traversed in my youth but the internet of things that comes
          with it too.{" "}
        </p>
        <p>
          {" "}
          As a lover of research, video games, and technology I found myself
          constantly online but, after completing my law degree, I felt that I
          wanted to pursue this further.
        </p>
        <p>
          I completed some solo learning, then some guided learning through Code
          First Girls, and finally I was able to complete a software development
          bootcamp through Tech Educators.
        </p>
        <p>
          Having completed the Tech Educators Software Development Bootcamp with
          a distinction I wish to progress my career.
        </p>
      </main>
    </div>
  );
}
