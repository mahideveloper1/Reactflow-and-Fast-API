import BaseNode from "./BaseNode";
import { Position } from "reactflow";

export const CustomNode2 = ({ id, data }) => {
  const inputs = [{ key: "param1", label: "Param", type: "text" }];

  const handles = [
    { type: "source", position: Position.Right, id: `${id}-output` },
    { type: "target", position: Position.Left, id: `${id}-input` },
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      title="Custom Node 2"
      inputs={inputs}
      handles={handles}
    />
  );
};
