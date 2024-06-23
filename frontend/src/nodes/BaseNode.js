import React, { useState, useEffect, useRef } from "react";
import { Handle, Position, useUpdateNodeInternals } from "reactflow";
import TextareaAutosize from "react-textarea-autosize";

const BaseNode = ({ id, data, title, inputs, handles }) => {
  const [text, setText] = useState(data.text || "");
  const [patternMatches, setPatternMatches] = useState([]);
  const updateNodeInternals = useUpdateNodeInternals();
  const nodeRef = useRef(null);

  // function to find all handle patterns in text
  const findHandlePatterns = (text) => {
    const regex = /\{\{(.+?)\}\}/g;
    const matches = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
      matches.push(match[1]);
    }
    return matches;
  };

  useEffect(() => {
    // update patternMatches whenever text changes
    const matches = findHandlePatterns(text);
    setPatternMatches(matches);
    updateNodeInternals(id); // Update node internals when patterns change

    // to adjust the size of node as per text
    const nodeElement = nodeRef.current;
    if (nodeElement) {
      const textareaElement = nodeElement.querySelector("textarea");
      if (textareaElement) {
        const { offsetHeight } = textareaElement;
        nodeElement.style.height = `${offsetHeight + 50}px`;
      }
    }
  }, [text, id, updateNodeInternals, patternMatches, handles]);

  const handleChange = (e, key) => {
    setText(e.target.value);
  };

  return (
    <div
      ref={nodeRef} // Attach the ref to the node element
      style={{
        position: "relative",
        width: 200,
        height: 100,
        border: "1px solid blue",
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#6CB4EE",
      }}
    >
      <div
        style={{ marginBottom: 10, textAlign: "center", fontWeight: "bold" }}
      >
        <span>{title}</span>
      </div>
      <div>
        {inputs.map((input) => (
          <label
            key={input.key}
            style={{ marginBottom: 5, display: "flex", alignItems: "center" }}
          >
            {input.label}:
            {input.type === "select" ? (
              <select
                value={text[input.key]}
                onChange={(e) => handleChange(e, input.key)}
                style={{ marginLeft: 20 }}
              >
                {input.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : input.type === "textarea" ? (
              <TextareaAutosize
                value={text}
                minRows={2}
                maxRows={16}
                onChange={(e) => handleChange(e, input.key)}
                style={{ width: "100%" }} // Use full width of the node
              />
            ) : (
              <input
                type={input.type}
                value={text[input.key]}
                onChange={(e) => handleChange(e, input.key)}
                style={{ marginLeft: 10, width: "calc(100% - 60px)" }}
              />
            )}
          </label>
        ))}
      </div>
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style}
        />
      ))}
      {patternMatches.map((match, index) => (
        <Handle
          key={`left-handle-${index}`}
          type="target"
          position={Position.Left}
          id={`${id}-target-${index}`}
          style={{
            background: "#555",
            top: `${(index + 1) * (100 / (patternMatches.length + 1))}%`,
          }}
          name={match}
        />
      ))}
    </div>
  );
};

export default BaseNode;
