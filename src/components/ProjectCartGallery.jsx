import Image from "next/image";
import Link from "next/link";
import * as left from "@/../public/arrow-left.png";
import * as right from "@/../public/arrow-right.png";

export default function ProjectCartGallery({ styles, entries, Dialog }) {
  const scrollBar = document.getElementById("scrollBar");
  const cart = document.getElementById("cart");
  const itemWidth = cart * 1.2;
  console.log(itemWidth);

  //   function handleLeft() {
  //     console.log("left");
  //     console.log(scrollBar);
  //     scrollBar.scrollBy(-100, -100);
  //   }
  //   function handleRight() {
  //     console.log("right");
  //     console.log(scrollBar);
  //     // scrollBar.scrollBy(100, 100);
  //   }

  return (
    <section className={styles.scrollBar}>
      <Image
        className={styles.arrow}
        onClick={() =>
          scrollBar.scrollBy({ top: 0, left: -itemWidth, behavior: "smooth" })
        }
        src={left}
        alt={"scroll bar left"}
        height={100}
        width={100}
      />

      <div className={styles.modalContainer} id="scrollBar">
        {entries.map((entry) => (
          <Dialog.Close asChild key={entry.entry_id}>
            <Link
              id="cart"
              href={`/project/${entry.entry_id}`}
              className={styles.modalOption}
            >
              {entry.screenshots ? (
                <Image
                  tabIndex={"0"}
                  className={`rounded-2xl z-10  cursor-select
                  hover:drop-shadow-2xl hover:drop-shadow-violet-500 hover:h-29 
                  focus:outline-2 focus:outline-offset-2 
                ${styles.image}`}
                  src={entry.cart}
                  alt={entry.entry_title}
                  width={400}
                  height={300}
                />
              ) : null}
            </Link>
          </Dialog.Close>
        ))}
      </div>

      <Image
        className={styles.arrow}
        onClick={() =>
          scrollBar.scrollBy({ top: 0, left: itemWidth, behavior: "smooth" })
        }
        src={right}
        alt={"scroll bar right"}
        height={100}
        width={100}
      />
    </section>
  );
}
