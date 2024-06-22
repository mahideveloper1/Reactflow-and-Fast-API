import BaseNode from "./BaseNode";
import { Handle, Position } from "reactflow";

export const CustomNode4 = ({ id, data }) => {
  const inputs = [
    { key: "inputName", label: "Attribute", type: "text" },
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
      title="CustomNode 4"
      inputs={inputs}
      handles={handles}
    />
  );
};
