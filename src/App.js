import './App.css';
import CardView from "./components/CardView";
import {ChakraProvider} from '@chakra-ui/react'
import QueryMoment from "./components/QueryMoment";
import ChatLog from "./components/ChatLog";
import {useState} from "react";

function App() {
    const [chats, setChats] = useState([]);

    const update = (text) => {
        setChats([...chats, text])
    }

    return (
        <ChakraProvider>
            <div className="App justify-center min-h-screen place-content-center py-24 grid grid-cols-2 pl-48">
                <div>
                    <CardView className={"h-screen"}></CardView>
                    <QueryMoment className={"mx-auto"} onQuery={update}></QueryMoment>
                </div>
                <div className={"w-7/12 bg-slate-700 rounded-xl drop-shadow-lg overflow-hidden p-4"}>
                    <ChatLog className={"h-full"} chats={chats}></ChatLog>
                </div>
            </div>
        </ChakraProvider>
  );
}

export default App;
