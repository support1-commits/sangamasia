import "./globals.css";

export const metadata = {
  title: "SANGAM – South Asian Agricultural Heritage Network",
  description:
    "SANGAM unites agricultural museums, farmers, and scholars across South Asia to preserve the living heritage of farming traditions across India, Pakistan, Bangladesh, Nepal, Sri Lanka, Bhutan, Afghanistan and the Maldives.",
  keywords: ["SANGAM", "agriculture", "heritage", "South Asia", "agricultural museum", "farming", "CIMA"],
  openGraph: {
    title: "SANGAM – Agricultural Heritage Network",
    description: "Uniting South Asia's agricultural museums, heritage sites, and farming communities.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080e04",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
