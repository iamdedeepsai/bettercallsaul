import './App.css';
import Card from "./components/Card";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
      <ChakraProvider>
          <div className="App">
              <Card></Card>
          </div>
      </ChakraProvider>
  );
}

export default App;
