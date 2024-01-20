import { Inter } from "next/font/google";
import Link from "next/link";
import "../globals.scss";
import { theme } from "../styles/theme";
import "../styles/variables.css";
import { HamburgerIcon } from "../components/HamburgerIcon";
import Image from "next/image";
import { BODY_CONTENT_ID } from "../utils/constants";
import { Sidebar } from "../components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme={theme}>
      <body className={inter.className}>
        <div id={BODY_CONTENT_ID} className="bodyContent">
          <header>
            <Image
              src="/static/images/logo.png"
              alt="B-11"
              width={60}
              height={60}
            />
          </header>
          <main>{children}</main>
          <footer>
            <Link href="/imprint">Imprint</Link>
            <Link href="/privacy">Data privacy</Link>
            <Link href="/copyright">Copyright</Link>
          </footer>
        </div>
        <div className="iconWrapper">
          <HamburgerIcon />
        </div>
        <Sidebar />
      </body>
    </html>
  );
}
