// #region Imports

// Styles
import "./global.css";
import styles from "./layout.module.css";

// Fonts
import { PrimeformPro } from "@/fonts";

// Components
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

// #endregion

export const metadata = {
  title: "Home",
  description: "The home page of the application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={PrimeformPro.className}>
      <body>
        <Navbar />
        <main className={styles.page}>{children}</main>
        <Sidebar />
      </body>
    </html>
  );
}
