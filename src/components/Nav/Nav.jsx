import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => (
  <>
    <Link to="/home">
      <button>Home</button>
    </Link>
    <Link to="/about">
      <button>About</button>
    </Link>
    <Link to="/favorites">
      <button>Favorites</button>
    </Link>
    <SearchBar onSearch={onSearch} />
  </>
);

export default Nav;
