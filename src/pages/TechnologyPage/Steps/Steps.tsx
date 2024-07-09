import React from "react";

// CSS prefix: .techsteps-
import "./style.css";

interface StepsProps {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

function Steps({ index, setIndex }: StepsProps) {
  const dots = [];
  for (let i = 0; i < 3; i++) {
    const element = (
      <div
        key={i}
        className="techsteps-dot"
        data-active={i === index}
        onClick={() => setIndex(i)}
      >
        {i + 1}
      </div>
    );

    dots.push(element);
  }

  return <section className="techsteps">{dots}</section>;
}

export default Steps;
