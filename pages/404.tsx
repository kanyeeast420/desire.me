import React from "react";
import { Button } from "../components/UI/Button";

export default class ErrorPage extends React.Component {
  render() {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center font-display text-xs">
        <span className="mb-5">404 - No treasure to find in here</span>
        <Button
          link="/"
          target="_self"
          placeholder="Go Home"
          type="button"
        ></Button>
      </div>
    );
  }
}
