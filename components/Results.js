import React from "react";
import Card from "./Card";

function Results({ results }) {
  return (
    <div>
      {results.map((result) => {
        return <Card result={result} key={result.id} />;
      })}
    </div>
  );
}

export default Results;
