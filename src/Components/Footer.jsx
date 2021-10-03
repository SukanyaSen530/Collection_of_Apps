import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_note">
        <p>Privacy Note : We are not storing any data </p>
      </div>

      <div className="footer_socialIcons">
        <a href="https://github.com/SukanyaSen530">
          <i className="fab fa-github-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/sukanya-sen-615980130/">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
      </div>
    </footer>
  );
}
