import { FC } from "react";
import logo from "../assets/FurnitureXPRESS.png";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useUserContext } from "../context/user_context";

const Sidebar = () => {
  const { isSideBarOpen, closeSideBar } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <div className="text-center">
      <aside
        className={`fixed top-0 left-0 w-full h-full bg-white transition-all -translate-x-full -z-[1] lg:hidden ${
          isSideBarOpen ? "translate-x-0 z-[999]" : ""
        }`}
      >
        <div className="flex justify-between items-center py-4 px-6">
          <img src={logo} alt="FurnitureXpress logo" className="h-14" />
          <button
            type="button"
            className="text-4xl bg-opacity-0 border-opacity-0  transition-all cursor-pointer text-red-dark mt-1 hover:text-red-light"
            onClick={closeSideBar}
          >
            <FaTimes></FaTimes>
          </button>
        </div>
        <ul className="mb-8">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <LinkItem
                key={id}
                text={text}
                url={url}
                closeSideBar={closeSideBar}
              ></LinkItem>
            );
          })}
          {myUser && (
            <LinkItem
              text="checkout"
              url="/checkout"
              closeSideBar={closeSideBar}
            ></LinkItem>
          )}
        </ul>
        <CartButtons style="my-8 mx-auto grid"></CartButtons>
      </aside>
    </div>
  );
};

const LinkItem: FC<{ url: string; text: string; closeSideBar: () => void }> = ({
  url,
  text,
  closeSideBar,
}) => {
  return (
    <li>
      <Link
        to={url}
        className="block text-left text-[1rem] capitalize py-4 px-6 text-grey-300 transition-all tracking-widest hover:pl-8 hover:bg-grey-1000 hover:text-grey-200"
        onClick={closeSideBar}
      >
        {text}
      </Link>
    </li>
  );
};
export default Sidebar;
