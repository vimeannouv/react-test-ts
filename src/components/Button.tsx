import { type MouseEvent, type DragEvent } from "react";
import { type ReactNode } from "react";
interface Props {
  children: ReactNode;
  onClick?: (ev: MouseEvent) => void;
  color?: string;
  onDrag?: (ev: DragEvent) => void;
  onDragEnd?: (ev: DragEvent) => void;
  onDragStart?: (ev: DragEvent) => void;
  draggable?: boolean;
  align?: "center" | "left" | "right";
}

const Button = ({
  children,
  onClick,
  color = "primary",

  onDrag,
  onDragEnd,
  onDragStart,

  draggable = false,

  align = "left",
}: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: align,
      }}>
      <button
        type="button"
        className={"btn btn-" + color}
        onClick={onClick}
        draggable={draggable}
        onDrag={onDrag}
        onDragEnd={onDragEnd}
        onDragStart={onDragStart}>
        {children}
      </button>
    </div>
  );
};

export default Button;
