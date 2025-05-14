import Hero from "./components/HomeComponents/Hero";
import Introduction from "./components/About";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="md:p-3 bg-gray-100">
      <Hero />
      <Introduction />
      <Projects />
    </div>
  );
}
