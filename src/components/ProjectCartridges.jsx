import Link from "next/link";
import ImageComponent from "./ImageComponent";

export default function ProjectCartridges({ styles, entries, Dialog }) {
  return (
    <section className={styles.modalContainer}>
      {entries.map((entry) => (
        <Dialog.Close asChild key={entry.entry_id}>
          <Link
            href={`/project/${entry.entry_id}`}
            className={styles.modalOption}
          >
            {entry.screenshots ? (
              <ImageComponent
                c={styles.image}
                s={entry.cart}
                a={entry.entry_title}
                w={400}
                h={300}
              />
            ) : null}
          </Link>
        </Dialog.Close>
      ))}
    </section>
  );
}
