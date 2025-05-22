import React, { useState } from "react";
import data from "../../helper/data";
import Person from "./Person";
import "./Home.scss";

const Home = () => {
  const [index, setIndex] = useState(0); // current page

  const showPeople = data.slice(index, index + 6);

  const isFirstPage = index === 0;
  const isLastPage = index + 6 >= data.length;

  const goNext = () => {
    if (index + 6 >= data.length) {
      setIndex(0);
    } else {
      setIndex(index + 6);
    }
  };

  const goBack = () => {
    if (index - 6 < 0) {
      setIndex(data.length - 6);
    } else {
      setIndex(index - 6);
    }
  };

  return (
    <div>
      <div className="container">
        <h3>
          Employee from {index + 1} to {index + showPeople.length}
        </h3>

        {showPeople.map((item) => {
          return (
            <Person
              key={item.id}
              name={item.name}
              email={item.email}
              age={item.age}
              image={item.image}
            />
          );
        })}

        <div className="btns">
          <button
            onClick={goBack}
            disabled={isFirstPage}
            className={`nav-button ${isFirstPage ? "disabled" : ""}`}
          >
            Prev
          </button>

          <button
            onClick={goNext}
            disabled={isLastPage}
            className={`nav-button ${isLastPage ? "disabled" : ""}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
