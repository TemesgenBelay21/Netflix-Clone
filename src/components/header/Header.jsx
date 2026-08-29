import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import { Search, Bell, User, ChevronDown } from "lucide-react";
function Header() {
  return (
    <header>
      <div>
        {/* logo */}

        <img src={logo} alt="netflix logo" />

        {/* navigation links  */}

        <nav>
          <Link to="/">Home</Link>
          <Link to="/tv">Tv Shows</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/new-and-popular">New And Popular</Link>
          <Link to="/mylist">My list</Link>
          <Link to="/browse-by-language">Browse by language</Link>
        </nav>

        {/* right side section */}

        <div>
          {/* search box */}
          <div>
            <button>
              <Search />
            </button>
          </div>
          {/* notifcation  */}
          <button>
            <Bell />
            <span>4</span>
          </button>
          {/* profile */}

          <div>
            <button>
              <div>
                <User />
              </div>
              <ChevronDown />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
