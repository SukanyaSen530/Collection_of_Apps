import { projects } from "../ProjsQuiz";
import Card from "./Card";
import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      <h1> Click on play or navigate from Navbar!</h1>
      <div>
        {projects.map((item) => (
          <Card {...item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
