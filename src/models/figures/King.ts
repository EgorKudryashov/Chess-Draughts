import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }

  kingStep(target: Cell): boolean {
    const horizontal = Math.abs(this.cell.x - target.x);
    const vertical = Math.abs(this.cell.y - target.y);

    if (horizontal <= 1 && vertical <= 1) {
      return true;
    }
    return false;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    if (this.kingStep(target)) {
      return true;
    }
    return false;
  }
}
