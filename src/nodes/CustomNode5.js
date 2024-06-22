import BaseNode from "./BaseNode";
import { Position } from "reactflow";

export const CustomNode5 = ({ id, data }) => {
  const inputs = [
    { key: "parameter", label: "Param", type: "text" },
    { key: "value", label: "Value", type: "text" },
  ];

  const handles = [
    { type: "source", position: Position.Right, id: `${id}-output` },
    { type: "target", position: Position.Left, id: `${id}-input` },
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      title="Custom Node 5"
      inputs={inputs}
      handles={handles}
    />
  );
};
