"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import * as hideHeader from "@/styles/hideHeader.module.css";
import Menu from "./Menu";

export default function HideHeader({ urlData }) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (current > previous) {
      setHidden(true);
    } else if (current > visualViewport.height * 0.85) {
      setHidden(true);
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
        <Menu urlData={urlData} />
      </div>
    </motion.header>
  );
}
