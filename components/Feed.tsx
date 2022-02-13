import React, { useState, useEffect } from "react";
import { Wish } from "./UI/Wish";

interface Feed {}

interface Wish {
  _id: string;
  name: string;
  img: string;
  link: string;
  category: string;
}

export const Feed: React.FC<Feed> = ({}) => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  useEffect(() => {
    fetch("/api/wishes")
      .then((res) => res.json())
      .then((res) => setWishes(res));
  }, []);

  return (
    <div className="Feed grid w-full grid-cols-1 pl-5 pr-5 pt-16 md:grid-cols-2 lg:grid-cols-3">
      {wishes.map((wish) => (
        <Wish
          _id={wish._id}
          key={wish._id}
          category={wish.category}
          name={wish.name}
          link={wish.link}
          img={wish.img}
        />
      ))}
    </div>
  );
};
