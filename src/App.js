import './App.css';
import Card from "./components/Card";
import { ChakraProvider } from '@chakra-ui/react'
import QueryMoment from "./components/QueryMoment";

function App() {
    return (
        <ChakraProvider>
            <div className="App justify-center place-content-center py-24">
                <Card className={"h-screen"}></Card>
                <QueryMoment className={"ml-100"}></QueryMoment>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
            </div>
        </ChakraProvider>
  );
}

export default App;
