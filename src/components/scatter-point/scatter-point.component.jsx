import * as React from 'react';
import {useState} from "react";
import {Circle} from "victory";


const ScatterPoint = ({ x, y, datum }) => {
  const [selected, setSelected] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <Circle
      cx={x}
      cy={y}
      r={2}
      stroke={hovered ? "yellow" : "blue"}
      strokeWidth={0}
      fill={selected ? "green" : "blue"}
      onClick={() => setSelected(!selected)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
};

export default ScatterPoint;