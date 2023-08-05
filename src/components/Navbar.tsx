import logo from "../assets/FurnitureXPRESS.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const Nav = () => {
  const { openSideBar } = useProductsContext();
  const { myUser } = useUserContext();
  return (
    <nav className="h-20 flex items-center justify-center ">
      <div className="w-[90vw] mx-auto my-0 max-w-7xl lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="comfy sloth" className="w-36" />
          </Link>
          <button
            className="bg-0 border-opacity-0 text-primary-500 cursor-pointer text-3xl lg:hidden"
            type="button"
            onClick={openSideBar}
          >
            <FaBars></FaBars>
          </button>
        </div>
        <ul className="hidden lg:flex lg:items-center lg:justify-center">
          {links.map((link) => {
            return (
              <li key={link.id} className="my-0 mx-2">
                <Link
                  to={link.url}
                  className="lg:text-grey-300 lg:text-xl lg:capitalize lg:tracking-widest lg:p-2 lg:hover:border-b-2 lg:hover:border-solid lg:hover:border-primary-700"
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
          {myUser && (
            <li className="my-0 mx-2">
              <Link
                to={"/checkout"}
                className="lg:text-grey-300 lg:text-xl lg:capitalize lg:tracking-widest lg:p-2 lg:hover:border-b-2 lg:hover:border-solid lg:hover:border-primary-700"
              >
                checkout
              </Link>
            </li>
          )}
        </ul>
        <CartButtons style="hidden lg:grid"></CartButtons>
      </div>
    </nav>
  );
};

export default Nav;
