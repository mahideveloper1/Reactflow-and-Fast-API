import axios from "axios";
import { useStore } from "./store";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      console.log("Nodes:", nodes);
      console.log("Edges:", edges);

      const response = await axios.post(
        "http://127.0.0.1:8000/pipelines/parse",
        {
          nodes: nodes,
          edges: edges,
        }
      );

      const { num_nodes, num_edges, is_dag } = response.data;
      const isDagText = is_dag ? "yes" : "no";
      alert(
        `Number of nodes: ${num_nodes}, Number of edges: ${num_edges}, Is DAG: ${isDagText}`
      );
      const alertBox = document.getElementsByClassName("alert")[0];
      alertBox.style.backgroundColor = "#0564b5";
      alertBox.style.color = "white";
      alertBox.style.padding = "10px";
      alertBox.style.borderRadius = "8px";
      alertBox.style.border = "none";
      alertBox.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing the pipeline.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:
          "radial-gradient(circle, rgba(0, 0, 0, 0.5) 0.5px, transparent 1px)",
        backgroundSize: "10px 10px",
        height: "10.2vh",
        border: "0.5px solid black",
      }}
    >
      <button
        type="button"
        onClick={handleSubmit}
        style={{
          backgroundColor: "#0564b5",
          color: "white",
          padding: "10px 32px",
          fontSize: "15px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#45a049")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#0564b5")}
      >
        Submit
      </button>
    </div>
  );
};
