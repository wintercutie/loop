import "./globals.css";
import { poppins } from "../utils/fonts.jsx";

export const metadata = {
  title: "DataBlitz",
  description: "Your Total Gaming & Multimedia Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins}`}>{children}</body>
    </html>
  );
}
