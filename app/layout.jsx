import "./globals.css";

export const metadata = {
  title: "SANGAM — South Asian Agricultural Heritage Network",
  description:
    "SANGAM unites agricultural museums, farmers, and scholars across South Asia to preserve the living heritage of farming traditions.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1c3a26",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
