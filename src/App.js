import './App.css';
import CardView from "./components/CardView";
import {ChakraProvider} from '@chakra-ui/react'
import QueryMoment from "./components/QueryMoment";

function App() {
    return (
        <ChakraProvider>
            <div className="App justify-center place-content-center py-24 grid grid-cols-2 pl-48">
                <div>
                    <CardView className={"h-screen"}></CardView>
                    <QueryMoment className={"mx-auto"}></QueryMoment>
                </div>
                <div className={"w-7/12 bg-slate-700 rounded-xl drop-shadow-lg"}>

                </div>
            </div>
        </ChakraProvider>
  );
}

export default App;
