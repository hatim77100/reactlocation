// import { render } from "@testing-library/react";
let styles = {
    background: "bg-red-200",
    text: "text-yellow-100",
    all: {
        test : "1",
        test2 : "2"
    }
}

let loading = false;

const Navbar = () => {
    return (
        <nav className={[styles.background, styles.text]}>
      <ul>
        <li>
          <a href="#">Accueil</a>
        </li>
        <li>
          <a href="#">Accueil</a>
        </li>
        <li>
          <a href="#">Accueil</a>
        </li>
      </ul>
    </nav>
  );
//   loading === true ? return (): Return()  
};

export default Navbar;
