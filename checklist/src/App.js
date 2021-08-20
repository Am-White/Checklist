import Note from "./views/notes";
import Home from "./views/home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
      <Router>
           <div className="App">
              <ChakraProvider>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/notetaker" component={Note} />
                 </Switch>
              </ChakraProvider>
           </div>
      </Router>
  );
}

export default App;
