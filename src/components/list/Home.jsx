import React, { useState } from "react";
import data from "../../helper/data";
import Person from "./Person";
import "./Home.scss";

const Home = () => {
  const [index, setIndex] = useState(0); // current page

  const showPeople = data.slice(index, index + 6);

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
        }
        )}

        <div className="btns">
          <button onClick={goBack}>Prev</button>
          <button onClick={goNext}>Next</button>
        </div>
      
      </div>
   
    </div>
  );
};

export default Home;
