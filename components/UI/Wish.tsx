import React from "react";
import Link from "next/link";

interface Wish {
  _id: string;
  name: string;
  img: string;
  link: string;
  category: string;
}

export const Wish: React.FC<Wish> = ({ link, name, _id, img, category }) => {
  return (
    <div className="Wish flex h-fit flex-row">
      <div className="flex flex-col pr-5">
        <div className="flex flex-col mb-3">
          <span>{name}</span>
          <span>{category}</span>
        </div>
        <div className="">
          <span className="pt-2" id="_id">
            {_id}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link href={link} as={link}>
          <a target={"_blank"}>
            <img src={img} alt="" className=" w-96" />
          </a>
        </Link>
      </div>
    </div>
  );
};
