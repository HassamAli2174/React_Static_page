import pexel from "../image/pexel.jpg";
import "../style/style.css";

const Header = () => {
  return (
    <header className="header">
      {/* <img src={pexel} alt="HeaderImage" /> */}
      <div
        className="hero_area"
        id="imagecontainer"
      >
        <h1 class="hero_heading">2023's Best View</h1>{" "}
        <p class="hero_sub_text">
          Find the top Scenry Viewing websites and businesses with reviews and ratings.
        </p>
      </div>
    </header>
  );
};

export default Header;
