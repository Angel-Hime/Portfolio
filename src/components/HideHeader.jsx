"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import * as hideHeader from "@/styles/hideHeader.module.css";

export default function HideHeader() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (current > previous) {
      // needs to be hidden at current = 200
      // console.log(`previous ${previous}`);
      // console.log(`current ${current}`);
      setHidden(true);
    } else if (current > visualViewport.height) {
      setHidden(true);
      // console.log(visualViewport.height);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      className={hideHeader.header}
      animate={{ y: hidden ? "-200%" : "0%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className={hideHeader.header_content}>
        <div className={hideHeader.title}>
          <h1>Annabel Peart</h1>
          <hr />
          <p>Software Developer</p>
        </div>
        <nav className={hideHeader.navigation}>
          {/* component for navigation drop down */}
        </nav>
      </div>
    </motion.header>
  );
}
