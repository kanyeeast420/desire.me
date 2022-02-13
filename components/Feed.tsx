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
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("/api/wishes")
      .then((res) => res.json())
      .then((res) => setWishes(res));

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="Feed">
      <div className="Feed grid w-full grid-cols-1 gap-10 pl-5 pr-5 pt-16">
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
    </div>
  );
};
