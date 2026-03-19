import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import styles from "@/styles/menuStyle.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const urlData = usePathname();
  // console.log(urlData);
  return (
    <NavigationMenu.Root className={styles.Root}>
      <NavigationMenu.List className={styles.MenuList}>
        <NavigationMenu.Item>
          {urlData === "/" ? (
            <NavigationMenu.Link className={styles.Link} href={"/about"}>
              About
            </NavigationMenu.Link>
          ) : urlData === "/about" ? (
            <NavigationMenu.Link className={styles.Link} href={"/"}>
              Home
            </NavigationMenu.Link>
          ) : null}
        </NavigationMenu.Item>
        {urlData !== "/about" && urlData !== "/" ? (
          <>
            <NavigationMenu.Item>
              {" "}
              <NavigationMenu.Link className={styles.Link} href={"/"}>
                Home
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link className={styles.Link} href={"/about"}>
                About
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </>
        ) : null}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={styles.Trigger}>
            Portfolio <CaretDownIcon className={styles.CaretDown} aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={styles.Content}>
            <ul className={`${styles.List} one`}>
              <li style={{ gridRow: "span 3" }}>
                <NavigationMenu.Link asChild>
                  <Link className={styles.Callout} href="/project/personal">
                    <div className={styles.CalloutHeading}>
                      Personal Projects
                    </div>
                    <p className={styles.CalloutText}>
                      Personal Projects Completed For Skills or Career
                      Development
                    </p>
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li style={{ gridRow: "span 3" }}>
                <NavigationMenu.Link asChild>
                  <Link className={styles.Callout} href="/project/bootcamp">
                    <div className={styles.CalloutHeading}>
                      Bootcamp Projects
                    </div>
                    <p className={styles.CalloutText}>
                      Projects Completed During The Tech Educators Bootcamp
                    </p>
                  </Link>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className={styles.Link}
            href="https://github.com/angel-hime"
            target="_blank"
          >
            Github
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className={styles.Indicator}>
          <div className={styles.Arrow} />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className={styles.ViewportPosition}>
        <NavigationMenu.Viewport className={styles.Viewport} />
      </div>
    </NavigationMenu.Root>
  );
}
