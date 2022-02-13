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
    <div className="Wish m-2 flex flex-col">
      <Link href={link} as={link}>
        <a target={"_blank"}>
          <img src={img} alt="" className="max-h-full" />
        </a>
      </Link>
      <div className="flex flex-col">
        <span>{name}</span>
        <span>{category}</span>
        <span>{_id}</span>
      </div>
    </div>
  );
};
