import "../globals.scss";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Link href="/">Home</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/about">About Us</Link>
        </header>
        <main>{children}</main>
        <footer>
          <Link href="/imprint">Imprint</Link>
          <Link href="/privacy">Data privacy</Link>
          <Link href="/copyright">Copyright</Link>
        </footer>
      </body>
    </html>
  );
}
