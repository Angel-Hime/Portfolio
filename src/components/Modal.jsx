"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import * as styles from "@/styles/modal.module.css";
import ProjectCartridges from "./ProjectCartridges";
import ProjectCartGallery from "./ProjectCartGallery";

export default function Modal({ nES, handle, t }) {
  const [entries, setEntries] = useState([" "]);
  const urlData = usePathname();
  const [modalToggle, setModalToggle] = useState(null);
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

          <ProjectCartGallery
            styles={styles}
            entries={entries}
            Dialog={Dialog}
          />

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
