import "./App.css";
import HomePage from "./component/pages/HomePage";
import { TooltipProvider } from "@/components/ui/tooltip";

function App() {
  return (
    <>
      <TooltipProvider>
        <HomePage />
      </TooltipProvider>
    </>
  );
}

export default App;
