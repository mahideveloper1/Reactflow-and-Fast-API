//Ui.js

import { useState, useRef, useCallback } from "react";
import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import { InputNode } from "./nodes/inputNode";
import { LLMNode } from "./nodes/llmNode";
import { OutputNode } from "./nodes/outputNode";
import { TextNode } from "./nodes/textNode";
import { CustomNode1 } from "./nodes/CustomNode1";
import { CustomNode2 } from "./nodes/CustomNode2";
import { CustomNode3 } from "./nodes/CustomNode3";
import { CustomNode4 } from "./nodes/CustomNode4";
import { CustomNode5 } from "./nodes/CustomNode5";
import "reactflow/dist/style.css";

const gridSize = 20;
const proOptions = { hideAttribution: true };
const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  customnode1: CustomNode1,
  customnode2: CustomNode2,
  customnode3: CustomNode3,
  customnode4: CustomNode4,
  customnode5: CustomNode5,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useStore(selector, shallow);

  const getInitNodeData = (nodeID, type) => {
    let nodeData = { id: nodeID, nodeType: `${type}` };
    return nodeData;
  };

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      if (event?.dataTransfer?.getData("application/reactflow")) {
        const appData = JSON.parse(
          event.dataTransfer.getData("application/reactflow")
        );
        const type = appData?.nodeType;

        // check if the dropped element is valid
        if (typeof type === "undefined" || !type) {
          return;
        }

        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });

        const nodeID = getNodeID(type);
        const newNode = {
          id: nodeID,
          type,
          position,
          data: getInitNodeData(nodeID, type),
        };

        addNode(newNode);
      }
    },
    [reactFlowInstance]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const getEdgeCenter = (edge) => {
    const sourceNode = nodes.find((node) => node.id === edge.source);
    const targetNode = nodes.find((node) => node.id === edge.target);

    if (!sourceNode || !targetNode) return { x: 0, y: 0 };

    const sourcePos = sourceNode.position;
    const targetPos = targetNode.position;

    return {
      x: (sourcePos.x + targetPos.x) / 2,
      y: (sourcePos.y + targetPos.y) / 2,
    };
  };

  return (
    <>
      <div
        ref={reactFlowWrapper}
        style={{
          width: "100vw",
          height: "75vh",
          backgroundColor: "#e3f0f3",
        }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onInit={setReactFlowInstance}
          nodeTypes={nodeTypes}
          proOptions={proOptions}
          snapGrid={[gridSize, gridSize]}
          connectionLineType="smoothstep"
        >
          <Background color="#08191d" gap={gridSize} />
          <Controls />
          <div style={{ border: "0.5px solid black" }}>
            <MiniMap
              nodeColor={(node) => {
                switch (node.type) {
                  case "customInput":
                    return "#0041d0";
                  case "llm":
                    return "black";
                  case "customOutput":
                    return "#ff0072";
                  case "text":
                    return "#ff8400";
                  case "customnode1":
                    return "#00b386";
                  case "customnode2":
                    return "#9e00c5";
                  case "customnode3":
                    return "#ff7e00";
                  case "customnode4":
                    return "#b30000";
                  case "customnode5":
                    return "yellow";
                }
              }}
            />
          </div>

          {edges.map((edge) => {
            const { x, y } = getEdgeCenter(edge);
            return (
              <div
                key={edge.id}
                style={{ position: "absolute", left: x, top: y }}
              ></div>
            );
          })}
        </ReactFlow>
      </div>
    </>
  );
};
