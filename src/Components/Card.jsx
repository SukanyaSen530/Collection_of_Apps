import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ name, link, imgURL }) {
  return (
    <article className="card">
      <img src={imgURL} alt="app_image" />

      <div className="card_body">
        <p> {name}</p>
        <Link to={link}> Play </Link>
      </div>
    </article>
  );
}
