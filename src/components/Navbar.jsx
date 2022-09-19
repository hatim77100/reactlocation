import { render } from "@testing-library/react";
import Input from "./Input";
import Proptypes from "prop-types";
import Button from "./Button";
import { useState } from "react";

let styles = {
  nav: "bg-red-500",
  h1: "bg-green-500",
};

const Navbar = () => {
  const [showLoading, setShowLoading] = useState(false);
  return (
    <div>
      <input
        id="number"
        className="text-red-600"
        value="valider"
        type="number"
      />
      <input />
      <button
        type="button"
        id="submit"
        value="Envoyer"
        onClick={() => setShowLoading(true)}
      />
      {showLoading ? (
        <>
          <h1>hello world</h1>
        </>
      ) : (
        <>
          <h1 className={styles.h1}>hello acs</h1>
        </>
      )}

      <div>
        <nav className="">
          <ul>
            <li>
              <a href="#" className="">
                Accueil
              </a>
            </li>
            <li>
              <a href="#">Accueil</a>
            </li>
            <li>
              <a href="#">Accueil</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
