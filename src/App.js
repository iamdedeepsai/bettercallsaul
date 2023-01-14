import './App.css';
import Card from "./components/Card";
import { ChakraProvider } from '@chakra-ui/react'
import QueryMoment from "./components/QueryMoment";

function App() {
    return (
        <ChakraProvider>
            <div className="App justify-center place-content-center py-24">
                <Card className={"h-screen"}></Card>
                <QueryMoment className={"mx-auto"}></QueryMoment>
            </div>
        </ChakraProvider>
  );
}

export default App;
