import React from "react";
import { Button } from "./UI/Button";
import { AiOutlineSearch } from "react-icons/ai";

interface Header {}

export const Header: React.FC<Header> = ({}) => {
  return (
    <div className="fixed flex h-16 w-full items-center justify-between overflow-hidden pl-5 pr-5">
      <div className="left flex flex-row">
        <Button
          placeholder="wishlist [0]"
          type="button"
          link="/"
          target="_self"
        ></Button>
        <Button
          placeholder="Add new wish"
          type="button"
          link="/new"
          target="_self"
        ></Button>
      </div>
      <div className="right flex flex-row">
        <Button
          type="button"
          placeholder="API"
          link="/api/wishes"
          target="_blank"
        ></Button>
        <Button type="button" link="/search" target="_self">
          <AiOutlineSearch></AiOutlineSearch>
        </Button>
      </div>
    </div>
  );
};
