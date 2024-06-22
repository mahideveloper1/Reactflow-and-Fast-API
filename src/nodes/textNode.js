import BaseNode from "./BaseNode";
import { Handle, Position } from "reactflow";

export const TextNode = ({ id, data }) => {
  const inputs = [{ key: "text", label: "Text", type: "textarea" }];

  const handles = [
    { type: "source", position: Position.Right, id: `${id}-output` },
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      title="Text"
      inputs={inputs}
      handles={handles}
    />
  );
};
