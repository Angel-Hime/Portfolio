"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LoadingComponent from "./LoadingComponent";

export default function NES({ nES, dbCall, projectDate }) {
  const [screenPower, setScreenPower] = useState(true);
  const images = dbCall?.screenshots.length - 1;
  console.log(images); // number of images in array
  const [image, setImage] = useState([0]);

  const [loading, setLoading] = useState(false);

  // load state timer
  async function delay(timeout) {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  }
  // nes buttons
  async function handleScreen(reset) {
    if (screenPower) {
      setLoading(false);
      setScreenPower(false);
    } else if (!screenPower) {
      setLoading(true);
      await delay(1000);
      setLoading(false);
      setImage(0);
      setScreenPower(true);
    }
    if (reset === "reset") {
      setScreenPower(false);
      await delay(1000);
      setLoading(true);
      await delay(3000);
      setLoading(false);
      setImage(0);
      setScreenPower(true);
    }
  }
  // scroll buttons
  function handleScroll(direction) {
    if (direction === "up") {
      const screenWindow = document.getElementById("window");
      screenWindow.scrollBy(0, -15);
    } else if (direction === "down") {
      const screenWindow = document.getElementById("window");
      screenWindow.scrollBy(0, 15);
    }
  }
  // image variable buttons
  function handleImageChange(direction) {
    if (direction === "left") {
      if (image > 0) {
        const counter = image - 1;
        setImage(counter);
      } else if (image === 0) {
        setImage(images);
      }
    } else if (direction === "right") {
      if (image != images) {
        const counter = Number(image + 1);
        setImage(counter);
      } else if (image === images) {
        setImage(0);
      }
    }
  }
  console.log(dbCall.screenshots[Number(image + 1)]);
  return (
    <>
      <main className={nES.mainDisplay}>
        <section id={"window"} className={nES.windowDisplay}>
          {loading ? (
            <section>
              {" "}
              <LoadingComponent nES={nES} />{" "}
            </section>
          ) : screenPower ? (
            <section>
              {dbCall?.screenshots ? (
                <section className={nES.imageBar}>
                  {image > 0 && image <= images ? (
                    <Image
                      src={dbCall?.screenshots[Number(image - 1)]}
                      alt={`image showing the web app ${dbCall.entry_title}`}
                      width={200}
                      height={100}
                      loading="eager"
                    />
                  ) : image < images && image === 0 ? (
                    <Image
                      src={dbCall?.screenshots[Number(images)]}
                      alt={`image showing the web app ${dbCall.entry_title}`}
                      width={200}
                      height={100}
                      loading="eager"
                    />
                  ) : null}
                  <Image
                    src={dbCall?.screenshots[image]}
                    alt={`image showing the web app ${dbCall.entry_title}`}
                    width={700}
                    height={300}
                    loading="eager"
                  />
                  {image < images && image >= 0 ? (
                    <Image
                      src={dbCall?.screenshots[Number(image + 1)]}
                      alt={`image showing the web app ${dbCall.entry_title}`}
                      width={200}
                      height={100}
                      loading="eager"
                    />
                  ) : image > 0 && image <= images ? (
                    <Image
                      src={dbCall?.screenshots[Number(0)]}
                      alt={`image showing the web app ${dbCall.entry_title}`}
                      width={200}
                      height={100}
                      loading="eager"
                    />
                  ) : null}
                </section>
              ) : (
                <h2>
                  {" "}
                  Image not provide, click edit to update project: &quot;
                  {dbCall.entry_title}&quot;
                </h2>
              )}
              <hr className={nES.hr} />
              <div className={nES.title}>
                <h2>Project Title:</h2>
                <h3>{dbCall?.entry_title}</h3>
              </div>

              <div className={nES.date}>
                <h2>Completion Date:</h2>
                <h3>{projectDate}</h3>
              </div>

              <div className={nES.entryContent}>
                <h2>Project Requirements & Stretch Goals:</h2>
                <p>{dbCall.entry_content}</p>
              </div>
            </section>
          ) : null}
        </section>
      </main>

      <section className={nES.systemMain}>
        <div className={nES.console}>
          <span>
            {" "}
            {/* div for NES two tone colours */}{" "}
            <h2 className={`mr-120 ${nES.padLabel}`}>.A.P.</h2>
            <p className={`ml-26`}> Project Portfolio System </p>
          </span>
          {/* buttons */}
          <nav>
            <button onClick={handleScreen} className={nES.consoleButton}>
              Power
            </button>
            <button
              className={nES.consoleButton}
              onClick={() => handleScreen("reset")}
            >
              Reset
            </button>
          </nav>

          {/* sockets */}
          <div className={nES.socketSection}>
            <div className={nES.socket}>
              <div></div>
              <div></div>
            </div>
            <div className={nES.socket}>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>

        <nav className={nES.gamePad}>
          {/* the left and right keys change the image */}
          <section className={nES.leftButtons}>
            <button
              onClick={() => handleScroll("up")}
              className={`col-start-2 col-end-3 row-start-1 row-end-2`}
            ></button>
            <button
              onClick={() => handleImageChange("right")}
              className={`col-start-3 col-end-4 row-start-2 row-end-3`}
            ></button>
            <button
              onClick={() => handleScroll("down")}
              className={`col-start-2 col-end-3 row-start-3 row-end-4`}
            ></button>
            <button
              onClick={() => handleImageChange("left")}
              className={`col-start-1 col-end-2 row-start-2 row-end-3`}
            ></button>
          </section>

          {/* these could both load a modal that has other projects on? */}
          <section className={nES.centreButtons}>
            <h2 className={nES.padLabel}>.A.P.</h2>
            <div>
              <button className={nES.padButton}>Select</button>
              <button className={nES.padButton}>Start</button>
            </div>
          </section>
          {/* code and visit */}
          <section className={nES.rightButtons}>
            <Link target="_blank" href={dbCall.git} className="self-end">
              Code
            </Link>
            <Link target="_blank" href={dbCall.site} className="self-start">
              Visit
            </Link>
          </section>
        </nav>
      </section>
    </>
  );
}
