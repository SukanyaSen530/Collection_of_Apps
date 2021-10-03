import { Link } from "react-router-dom";
import { quizes } from "../ProjsQuiz";
import "./Quiz.css";

export default function QuizLayout({ title, ...props }) {
  return (
    <section className="content">
      <div className="quiz_links">
        {quizes.map((item) => (
          <Link key={item.id} to={`${item.link}`}>
            {item.name}
          </Link>
        ))}
      </div>
      <div className="mini_apps">
        <h2>{title}</h2>
        {props.children}
      </div>
    </section>
  );
}
