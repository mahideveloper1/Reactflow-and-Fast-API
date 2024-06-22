import BaseNode from "./BaseNode";
import { Position } from "reactflow";

export const CustomNode3 = ({ id, data }) => {
  const inputs = [
    {
      key: "setting",
      label: "Setting",
      type: "select",
      options: ["A", "B", "C"],
    },
  ];

  const handles = [
    { type: "source", position: Position.Right, id: `${id}-result` },
    { type: "target", position: Position.Left, id: `${id}-config` },
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      title="Custom Node 3"
      inputs={inputs}
      handles={handles}
    />
  );
};
