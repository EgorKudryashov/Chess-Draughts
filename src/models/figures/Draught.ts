import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-draught.png";
import whiteLogo from "../../assets/white-draught.png";

export class Draught extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.DRAUGHT;
  }

  isEmptyDiagonalStep(target: Cell): boolean {
    const absX = Math.abs(target.x - this.cell.x);
    const absY = Math.abs(target.y - this.cell.y);

    if (absX !== absY) return false;

    const dy = this.cell.y < target.y ? 1 : -1;
    const dx = this.cell.x < target.x ? 1 : -1;

    return true;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    if (this.isEmptyDiagonalStep(target)) {
      return true;
    }
    return false;
  }
}
