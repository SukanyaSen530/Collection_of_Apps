import { projects } from "../ProjsQuiz";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav className="navbar">
      <img
        src="https://data.whicdn.com/images/155892926/original.gif"
        alt="icon"
        className="header_icon"
      />
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>{" "}
        </li>
        {projects.map((item) => (
          <li key={item.id}>
            <Link to={`${item.link}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
