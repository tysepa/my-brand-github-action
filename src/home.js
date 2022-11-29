import React, { useState } from "react";
import data from "./data/data";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { render } from "@testing-library/react";

const Home = () => {
  const myData = data;
  const [ariverSlide, setariverSlide] = useState(1);

  const prevSildeHandler = (id) => {
    if (id === 1) {
      setariverSlide(myData.length);
    } else if (id > 1) {
      setariverSlide(ariverSlide - 1);
    } else {
      setariverSlide(myData.length - 1);
    }
  };
  const nextSildeHandler = (id) => {
    if (id === myData.length) {
      setariverSlide(1);
    } else if (id < myData.length) {
      setariverSlide(ariverSlide + 1);
    } else {
      setariverSlide(myData.length - 1);
    }
  };
  render(
      
  )

  return (
    <div className="bg-black">
      {myData.map((item) => {
        const { id, image, title, text } = item;
        return (
          <div
            key={id}
            className={
              ariverSlide === id
                ? "flex justify-between items-center"
                : "hidden"
            }
          >
            <button
              className=""
              onClick={() => {
                prevSildeHandler(id);
              }}
            >
              <AiOutlineLeft />
            </button>
            <div>
              <img src={image} alt={title} />
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
            <button
              className=""
              onClick={() => {
                nextSildeHandler(id);
              }}
            >
              <AiOutlineRight />
            </button>
          </div>
        );
      })}
      <div></div>
    </div>
  );
};

export default Home;
