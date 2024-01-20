"use client";

import { useState } from "react";
import styles from "./HamburgerIcon.module.scss";
import { hasClass } from "@/app/utils/utils";
import { BODY_CONTENT_ID, SIDEBAR_ID } from "@/app/utils/constants";

export function HamburgerIcon() {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  const toggleSidebar = () => {
    const bodyContentEl = document.getElementById(BODY_CONTENT_ID);
    if (hasClass(bodyContentEl, "moveLeft")) {
      bodyContentEl?.classList.remove("moveLeft");
    } else {
      bodyContentEl?.classList.add("moveLeft");
    }

    const sidebarEl = document.getElementById(SIDEBAR_ID);
    if (hasClass(sidebarEl, "sidebarOpened")) {
      sidebarEl?.classList.remove("sidebarOpened");
    } else {
      sidebarEl?.classList.add("sidebarOpened");
    }

    setIsSidebarOpened(!isSidebarOpened);
  };

  return (
    <div className={styles.wrapper} onClick={toggleSidebar}>
      <div className={styles.layer}></div>
      <div
        className={`${styles.layerWithArrowWrapper} ${
          isSidebarOpened ? styles.active : ""
        }`}
      >
        <div className={styles.layer}></div>
        {isSidebarOpened && <div className={styles.arrow}></div>}
      </div>
      <div className={styles.layer}></div>
    </div>
  );
}
