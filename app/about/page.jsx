import About from "../../components/About";
import CountryStatus from "../../components/CountryStatus";

export const metadata = { title: "About — SANGAM" };

export default function AboutPage() {
  return (
    <main>
      <About />
      <CountryStatus />
    </main>
  );
}
