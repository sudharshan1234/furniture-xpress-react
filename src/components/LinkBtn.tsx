import { FC } from "react";
import { Link } from "react-router-dom";

const LinkBtn: FC<Props> = ({ url, text }) => {
  return (
    <Link
      to={url}
      className='uppercase bg-primary-500 text-primary-1000 py-1 px-3 tracking-widest inline-block font-normal transition-all text-xs cursor-pointer shadow rounded border-opacity-0 hover:text-primary-100 hover:bg-primary-700'
    >
      {text}
    </Link>
  );
};
export default LinkBtn;

interface Props {
  url: string;
  text: string;
}
