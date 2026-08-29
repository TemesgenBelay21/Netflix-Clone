import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import styles from "./header.module.css";


function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* logo */}

        <img  className = {styles.logo} src={logo} alt="netflix logo" />

        {/* navigation links  */}

        <nav className={styles.nav}>
          <Link className = {styles.NavLinks} to="/">Home</Link>
          <Link className = {styles.NavLinks} to="/tv">Tv Shows</Link>
          <Link className = {styles.NavLinks} to="/movies">Movies</Link>
          <Link className = {styles.NavLinks} to="/new-and-popular">New And Popular</Link>
          <Link className = {styles.NavLinks} to="/mylist">My list</Link>
          <Link className = {styles.NavLinks} to="/browse-by-language">Browse by language</Link>
        </nav>

        {/* right side section */}

        <div className={styles.actions}>
          {/* search */}
          <button className={styles.iconButton} aria-label="Search">
            <Search />
          </button>
          {/* notifcation  */}
          <button className={styles.iconButton} aria-label="Notifications">
            <Bell />
            <span className={styles.badge}>4</span>
          </button>
          {/* profile */}
          <button className={styles.iconButton} aria-label="Profile">
            <User />
            <ChevronDown />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
