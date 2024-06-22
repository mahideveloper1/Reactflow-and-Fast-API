import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      {/* <br /> */}
      <SubmitButton />
    </div>
  );
}

export default App;
