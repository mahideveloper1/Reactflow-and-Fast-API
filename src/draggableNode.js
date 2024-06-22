// draggableNode.js
import React from "react";
import { MdInput } from "react-icons/md";
import { MdCallMade } from "react-icons/md";
import { LuFileOutput } from "react-icons/lu";
import { CiText } from "react-icons/ci";
import { BiCustomize } from "react-icons/bi";
import { VscSymbolParameter } from "react-icons/vsc";
import { IoMdSettings } from "react-icons/io";
import { BiAlignMiddle } from "react-icons/bi";
import { BiAtom } from "react-icons/bi";

export const DraggableNode = ({ type, label }) => {
  const getIcon = (type) => {
    switch (type) {
      case "customInput":
        return <MdInput />;
      case "llm":
        return <MdCallMade />;
      case "customOutput":
        return <LuFileOutput />;
      case "text":
        return <CiText />;
      case "customnode1":
        return <BiCustomize />;
      case "customnode2":
        return <VscSymbolParameter />;
      case "customnode3":
        return <IoMdSettings />;
      case "customnode4":
        return <BiAlignMiddle />;
      case "customnode5":
        return <BiAtom />;
      default:
        return null;
    }
  };

  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      style={{
        cursor: "grab",
        minWidth: "80px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        borderRadius: "8px",
        backgroundColor: "#0564b5",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative", // Ensure relative positioning for child elements
      }}
      draggable
    >
      <div style={{ position: "absolute", top: 5, color: "white" }}>
        {getIcon(type)}
      </div>
      <br />
      <span style={{ color: "#fff" }}>{label}</span>
    </div>
  );
};
