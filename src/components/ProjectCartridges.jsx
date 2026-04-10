import Link from "next/link";
import ImageComponent from "./ImageComponent";
import { useEffect } from "react";

export default function ProjectCartridges({
  styles,
  entries,
  Dialog,
  setItemWidth,
  setScrollBar,
  itemWidth,
  scrollBar,
}) {
  useEffect(() => {
    async function setScroll() {
      try {
        const sB = document.getElementById("scrollBar");
        setScrollBar(sB);
        const cart = document.getElementById("cart");
        const iW = cart.clientWidth * 1.2;
        setItemWidth(iW);
      } catch (error) {
        console.error("Failed to load data:", error);
      }
    }
    setScroll();
    console.log(scrollBar);
    console.log(itemWidth);
    // repeats screen width check
    const pI = setInterval(setScroll, 1000);
    return () => clearInterval(pI);
  }, [setScrollBar, setItemWidth]);

  return (
    <div className={styles.modalContainer} id="scrollBar">
      {entries.map((entry) => (
        <Dialog.Close asChild key={entry.entry_id}>
          <Link
            id="cart"
            href={`/project/${entry.entry_id}`}
            className={styles.modalOption}
          >
            {entry.screenshots ? (
              <ImageComponent
                c={`rounded-2xl z-10  cursor-select
                  hover:drop-shadow-2xl hover:drop-shadow-violet-500 hover:h-29 
                  focus:outline-2 focus:outline-offset-2 
                ${styles.image}`}
                s={entry.cart}
                a={entry.entry_title}
                w={400}
                h={300}
              />
            ) : null}
          </Link>
        </Dialog.Close>
      ))}
    </div>
  );
}
