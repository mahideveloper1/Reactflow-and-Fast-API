import BaseNode from "./BaseNode";
import { Position } from "reactflow";

export const CustomNode1 = ({ id, data }) => {
  const inputs = [
    { key: "inputName", label: "Name", type: "text" },
    {
      key: "inputType",
      label: "Type",
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
      title="CustomNode 1"
      inputs={inputs}
      handles={handles}
    />
  );
};
