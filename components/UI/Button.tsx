import React from "react";
import Link from "next/link";

interface Button {
  placeholder?: string;
  type: "button" | "submit" | "reset";
  link: string;
  target: "_self" | "_blank";
}

export const Button: React.FC<Button> = ({
  placeholder,
  type,
  children,
  link,
  target,
}) => {
  return (
    <div className="mr-1 rounded-md bg-gray-100 bg-opacity-50 backdrop-blur-md hover:bg-slate-200 border">
      <Link href={`${link}`} as={`${link}`}>
        <a target={target}>
          <button
            type={type}
            className="flex flex-row items-center justify-center"
          >
            <span className="text-xs uppercase">{placeholder}</span>
            <div>{children}</div>
          </button>
        </a>
      </Link>
    </div>
  );
};
