import Hero from "./components/HomeComponents/Hero";
import Introduction from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Hero />
      <Introduction />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
