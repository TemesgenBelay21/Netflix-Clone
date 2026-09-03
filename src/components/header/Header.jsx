import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import styles from "./header.module.css";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchRef = useRef(/** @type {HTMLDivElement | null} */ (null));
  const profileRef = useRef(/** @type {HTMLDivElement | null} */ (null));
  const searchInputRef = useRef(/** @type {HTMLInputElement | null} */ (null));

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    /** @param {MouseEvent} e */
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(/** @type {Node} */ (e.target))) {
        setIsSearchOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(/** @type {Node} */ (e.target))) {
        setIsProfileOpen(false);
      }
    }
    /** @param {KeyboardEvent} e */
    function handleKeydown(e) {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
      <div className={styles.headerContainer}>
        {/* logo */}

        <img className={styles.logo} src={logo} alt="netflix logo" />

        {/* navigation links  */}

        <nav className={styles.nav}>
          <Link className={styles.NavLinks} to="/">
            Home
          </Link>
          <Link className={styles.NavLinks} to="/tv">
            Tv Shows
          </Link>
          <Link className={styles.NavLinks} to="/movies">
            Movies
          </Link>
          <Link className={styles.NavLinks} to="/new-and-popular">
            New And Popular
          </Link>
          <Link className={styles.NavLinks} to="/mylist">
            My list
          </Link>
          <Link className={styles.NavLinks} to="/browse-by-language">
            Browse by language
          </Link>
        </nav>

        {/* right side section */}

        <div className={styles.actions}>
          {/* search */}
          <div className={styles.searchField} ref={searchRef}>
            <input
              type="text"
              placeholder="Titles, people, genres"
              className={`${styles.searchInput} ${isSearchOpen ? styles.searchInputOpen : ""}`}
              ref={searchInputRef}
            />
            <button
              onClick={() => setIsSearchOpen((open) => !open)}
              className={styles.iconButton}
              aria-label="Search">
              <Search />
            </button>
          </div>

          {/* notifcation  */}
          <button className={styles.iconButton} aria-label="Notifications">
            <Bell />
            <span className={styles.badge}>4</span>
          </button>

          {/* profile */}
          <div className={styles.profile} ref={profileRef}>
            <button
              onClick={() => setIsProfileOpen((open) => !open)}
              className={styles.iconButton}
              aria-label="Profile"
              aria-expanded={isProfileOpen}>
              <User />
              <ChevronDown
                className={isProfileOpen ? styles.chevronOpen : ""}
              />
            </button>

            {isProfileOpen && (
              <ul className={styles.dropdownPanel}>
                <li>
                  <Link to="/profile" onClick={() => setIsProfileOpen(false)}>
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link to="/account" onClick={() => setIsProfileOpen(false)}>
                    Account
                  </Link>
                </li>
                <li>
                  <Link to="/help" onClick={() => setIsProfileOpen(false)}>
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/settings" onClick={() => setIsProfileOpen(false)}>
                    Settings
                  </Link>
                </li>
                <li className={styles.signOut}>
                  <Link to="/logout" onClick={() => setIsProfileOpen(false)}>
                    Sign out of Netflix
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
