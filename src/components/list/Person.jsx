import React from "react";
import "./Person.scss";

const Person = ({ name, email, age, image }) => {
  return (
    <div className="person">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{email}</p>
        <p>{age} years </p>
      </div>
    </div>
  );
};

export default Person;
