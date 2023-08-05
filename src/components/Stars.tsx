import { FC } from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars: FC<Props> = ({ stars, reviews }) => {
  const arr = [0, 1, 2, 3, 4];
  return (
    <div className="flex items-center mb-2">
      <div className="flex">
        {arr.map((val) => {
          return (
            <span className="text-[#ffb900] text-xl mr-1" key={val}>
              {stars - val >= 1 ? (
                <BsStarFill />
              ) : stars - val >= 0.5 ? (
                <BsStarHalf />
              ) : (
                <BsStar />
              )}
            </span>
          );
        })}
      </div>
      <p className="ml-1 mb-0">({reviews} Customer reviews)</p>
    </div>
  );
};

interface Props {
  stars: number;
  reviews: number;
}

export default Stars;
