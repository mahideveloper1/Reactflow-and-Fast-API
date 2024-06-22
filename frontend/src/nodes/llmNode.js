// llmNode.js

import { Position } from "reactflow";

import BaseNode from "./BaseNode";

export const LLMNode = ({ id, data }) => {
  const inputs = [];

  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-system`,
      style: { top: `${100 / 3}%` },
    },
    {
      type: "target",
      position: Position.Left,
      id: `${id}-prompt`,
      style: { top: `${200 / 3}%` },
    },
    { type: "source", position: Position.Right, id: `${id}-response-1` },
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      title="LLM"
      inputs={inputs}
      handles={handles}
    />
  );
};
