// outputNode.js
import { Position } from "reactflow";

import BaseNode from "./BaseNode";

export const OutputNode = ({ id, data }) => {
  const inputs = [
    { key: "outputName", label: "Name", type: "text" },
    {
      key: "outputType",
      label: "Type",
      type: "select",
      options: ["Text", "Image"],
    },
  ];

  const handles = [
    { type: "target", position: Position.Left, id: `${id}-value` },
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      title="Output"
      inputs={inputs}
      handles={handles}
    />
  );
};
