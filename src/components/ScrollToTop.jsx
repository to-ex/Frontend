import React from "react";
import { ReactComponent as UpIcon } from "../assets/images/Up.svg";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      style={{
        cursor: "pointer",
        position: "fixed",
        bottom: "3%",
        right: "3%",
        zIndex: "1000 !important",
      }}
    >
      <UpIcon />
    </div>
  );
};

export default ScrollToTop;
