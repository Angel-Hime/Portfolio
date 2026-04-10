"use client";
import Image from "next/image";
import * as left from "@/../public/arrow-left.png";
import * as right from "@/../public/arrow-right.png";
import ProjectCartridges from "./ProjectCartridges";
import { useState } from "react";

export default function ProjectCartGallery({ styles, entries, Dialog }) {
  const [itemWidth, setItemWidth] = useState([null]);
  const [scrollBar, setScrollBar] = useState(null);
  console.log(itemWidth);
  console.log(scrollBar);

  function scrolling(d) {
    if (d === "left") {
      console.log("left");
      scrollBar.scrollBy({ top: 0, left: -itemWidth, behavior: "smooth" });
    } else if (d === "right") {
      console.log("right");
      scrollBar.scrollBy({ top: 0, left: itemWidth, behavior: "smooth" });
    }
  }

  return (
    <section className={styles.scrollBar}>
      <Image
        className={styles.arrow}
        onClick={() => scrolling("left")}
        src={left}
        alt={"scroll bar left"}
        height={100}
        width={100}
      />
      <ProjectCartridges
        Dialog={Dialog}
        styles={styles}
        entries={entries}
        itemWidth={itemWidth}
        setItemWidth={setItemWidth}
        scrollBar={scrollBar}
        setScrollBar={setScrollBar}
      />
      <Image
        className={styles.arrow}
        onClick={() => scrolling("right")}
        src={right}
        alt={"scroll bar right"}
        height={100}
        width={100}
      />
    </section>
  );
}
