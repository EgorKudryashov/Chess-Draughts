import React, { FC } from "react";
import { Figure } from "../models/figures/Figure";

interface LostFigureProps {
  title: string;
  figure: Figure[];
}

const LostFigures: FC<LostFigureProps> = ({ title, figure }) => {
  return (
    <div className="lost">
      <h3>{title}</h3>
      {figure.map((figure) => (
        <div key={figure.id}>
          {" "}
          {figure.name}{" "}
          {figure.logo && <img height={20} width={20} src={figure.logo} />}
        </div>
      ))}
    </div>
  );
};

export default LostFigures;
