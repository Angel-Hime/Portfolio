"use client";

import * as Dialog from "@radix-ui/react-dialog";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import * as styles from "@/styles/modal.module.css";
import Link from "next/link";
import HideHeader from "./HideHeader";
import ImageComponent from "./ImageComponent";

export default function Modal({ nES, handle, t }) {
  const [entries, setEntries] = useState([" "]);
  const urlData = usePathname();

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        const dataSet = data.rows;
        // console.log(dataSet);
        setEntries(dataSet);
      } catch (error) {
        console.error("Failed to load data:", error);
      }
    }
    fetchProjects();
  }, [setEntries]);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={nES.padButton}>{t}</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.modalOverlay} />

        <Dialog.Content className={styles.modalContent}>
          <Dialog.Title className={styles.modalTitle}>
            Select A Different Project
          </Dialog.Title>
          <Dialog.Description className={styles.modalDescription}>
            Choose a new project to load
          </Dialog.Description>

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
          <div>
            <Dialog.Close asChild>
              <button className={nES.padButton}>Return</button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
