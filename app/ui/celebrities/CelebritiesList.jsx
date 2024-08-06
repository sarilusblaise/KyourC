import React from "react";

const CelebritiesList = ({ celebrities }) => {
  return (
    <div>
      <ul>
        {celebrities.map((celebrity) => {
          return <li key={celebrity.name}>{celebrity.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default CelebritiesList;
