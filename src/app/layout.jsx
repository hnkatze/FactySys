import { Inter } from "next/font/google";
import NavLink from "@/ui/nav-link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={inter.className}
        style={{
          display: "flex",
          flexDirection: "row",
          height: "57.04rem",
          alignContent: "center",
          alignItems: "start",
          textAlign: "center",
        }}>
        <div style={{ width: "10%" }}>
          <NavLink />
        </div>
        <div style={{ width: "90%", backgroundColor: "#B0C4DE" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
