import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__navigation">
          <h2>Start Bootstrap</h2>
        </div>
        <div className="header__navigation">
          <a
            href="https://startbootstrap.com/previews/heroic-features"
            className="active"
          >
            Home
          </a>
          <a href="https://startbootstrap.com/previews/heroic-features">
            About
          </a>
          <a href="https://startbootstrap.com/previews/heroic-features">
            Services
          </a>
          <a href="https://startbootstrap.com/previews/heroic-features">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
