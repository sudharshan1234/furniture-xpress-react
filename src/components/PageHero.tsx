import { FC } from "react";
import { Link } from "react-router-dom";
const PageHero: FC<Props> = ({ title, product }) => {
  return (
    <section className="text-primary-100 w-full min-h-[20vh] flex items-center bg-primary-1000">
      <div className="w-[90vw] my-0 mx-auto max-w-[1170px]">
        <h3 className="text-4xl capitalize tracking-tighter">
          <Link
            to="/"
            className="text-primary-300 p-2 transition-all hover:text-primary-100"
          >
            Home
          </Link>
          {product && <Link to="/products">/ products</Link>} / {title}
        </h3>
      </div>
    </section>
  );
};

interface Props {
  title: string;
  product?: boolean;
}
export default PageHero;
