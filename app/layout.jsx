import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookiesBanner from "../components/CookiesBanner";

export const metadata = {
  title: "SANGAM — South Asian Agricultural Heritage Network",
  description:
    "SANGAM unites agricultural museums, farmers, and scholars across South Asia to preserve the living heritage of farming traditions.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F5EBD8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <CookiesBanner />
      </body>
    </html>
  );
}
