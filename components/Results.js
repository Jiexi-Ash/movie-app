import React from "react";

function Results({ results }) {
  return (
    <div>
      {results.map((result) => {
        return <h1 key={result.title}>{result.title}</h1>;
      })}
    </div>
  );
}

export default Results;
