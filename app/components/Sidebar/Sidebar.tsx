import Image from "next/image";

import styles from "./Sidebar.module.scss";
import "./sidebarOpened.scss";
import { SIDEBAR_ID } from "@/app/utils/constants";
import Link from "next/link";

export function Sidebar() {
  return (
    <div id={SIDEBAR_ID} className={styles.sidebar}>
      <ul>
        <li>
          <Link href="/about-us">O nama</Link>
        </li>
        <li>
          <Link href="/prohects">Projekti</Link>
        </li>
        <li>
          <Link href="/contact">Kontakt</Link>
        </li>
      </ul>
      <Image
        src="/static/images/logo.png"
        alt="B-11"
        width={60}
        height={60}
        // className={styles.logo}
      />
    </div>
  );
}
