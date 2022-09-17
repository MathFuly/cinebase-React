import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import { useSearchNav } from "../hooks/useSearchNav";

import style from "./Navbar.module.css";

const Navbar = () => {
  const { handleSubmit, search, setSearch } = useSearchNav();

  return (
    <nav id="navbar" className={style.navmain}>
      <h2>
        <Link to="/">
          Cine 
          <BiCameraMovie />
           Base
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um Filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="sumbit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
