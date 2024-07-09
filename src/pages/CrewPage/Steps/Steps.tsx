import React from "react";

// CSS prefix: .crewsteps-
import "./style.css";

interface StepsProps {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

function Steps({ index, setIndex }: StepsProps) {
  const dots = [];
  for (let i = 0; i < 4; i++) {
    const element = (
      <div
        key={i}
        className="crewsteps-dot"
        data-active={i === index}
        onClick={() => setIndex(i)}
      ></div>
    );

    dots.push(element);
  }

  return <section className="crewsteps">{dots}</section>;
}

export default Steps;
