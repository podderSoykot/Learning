import React, { useState } from "react";
import Message from "../Message";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; // Capital I here
}

function ListGroup(props: Props) {
  const { items, heading, onSelectItem } = props;
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleClick = (
    item: string,
    event: React.MouseEvent<HTMLLIElement>
  ) => {
    setSelectedItem(item);
    console.log("Clicked item:", item);
    console.log("Mouse event:", event);
    onSelectItem(item);
  };

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && (
        <>
          <p>No Item Found.</p>
          <Message />
        </>
      )}
      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item}
            className={`list-group-item ${
              selectedItem === item ? "active" : ""
            }`}
            onClick={(event) => handleClick(item, event)}
            style={{ cursor: "pointer" }}
          >
            {item}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "20px" }}>
        <strong>Selected Item:</strong> {selectedItem ?? "None selected"}
      </div>
    </>
  );
}

export default ListGroup;
