import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Logic from "./Logic";

const App = () => {
  return (
    <div>
      <h1>To do List</h1>

      <Logic />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
