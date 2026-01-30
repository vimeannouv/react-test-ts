import { useState } from "react";
import { type MouseEvent } from "react";

// All this was apart of this coding tutorial: https://www.youtube.com/watch?v=SqcY0GlETPk

interface ListGroupProps {
  items: string[];
  heading: string;
  handleClick: (ev: MouseEvent) => void;
}

function ListGroup(props: ListGroupProps) {
  const items = props.items;
  const heading = props.heading;
  const handleClick = props.handleClick;

  const message = items.length === 0 ? <p>no items found!!!</p> : null;
  const message2 = items.length === 0 && (
    <p>this is another wya to write it!</p>
  );

  const [activeItem, setActiveItem] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {message}
      {message2}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              activeItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={(ev: MouseEvent) => {
              setActiveItem(index);
              handleClick(ev);
            }}>
            {item}
          </li>
        ))}
        <li></li>
      </ul>
    </>
  );
}

export default ListGroup;
