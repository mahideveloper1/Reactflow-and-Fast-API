// inputNode.js

import { Position } from "reactflow";
import BaseNode from "./BaseNode";

export const InputNode = ({ id, data }) => {
  const inputs = [
    { key: "inputName", label: "Name", type: "text" }, // name input box props
    {
      key: "inputType",
      label: "Type", // selectbox props
      type: "select",
      options: ["Text", "File"],
    },
  ];

  const handles = [
    { type: "source", position: Position.Right, id: `${id}-value` },
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      title="Input"
      inputs={inputs}
      handles={handles}
    />
  );
};
