import "./App.css";
import HomePage from "./component/pages/HomePage";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <TooltipProvider>
        <HomePage />
        <Toaster />
      </TooltipProvider>
    </>
  );
}

export default App;
