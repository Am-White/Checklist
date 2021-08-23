import Home from "./views/home";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </div>
  );
}

export default App;
