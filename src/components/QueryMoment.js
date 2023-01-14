import "./QueryMoment.css";
import openMic from "./Controller/mic"
import MicRoundedIcon from '@mui/icons-material/MicRounded';
import MicOffRoundedIcon from '@mui/icons-material/MicOffRounded';
import {useState} from "react";
import {useToast} from "@chakra-ui/react";
let started = false;

function QueryMoment() {
    let [color, setColour] = useState("slate-500");
    let toast = useToast();

    const clickHandler = () => {
        if (!started) {
            console.log("started");
            setColour("lime-300");
            openMic();
            started = true;
            toast({
                title: `Mic is recording!`,
                status: "success",
                duration: null,
                icon: <MicRoundedIcon/>
            })
        } else {
            toast.closeAll();
            console.log("ended");
            setColour("slate-500");
            started = false;
            toast({
                title: `Mic has stopped recording!`,
                status: "warning",
                duration: 1500,
                icon: <MicOffRoundedIcon/>
            })
        }
    }

    return (
        <div className={"flow-root w-72 justify-center content-center mx-auto"}>
            <div className="inputbox my-6 float-left">
                <input required="required" type="text"/>
                <span>Ask away!</span>
                <i></i>
            </div>
            <button className={"mt-11 mr-1 float-right"} onClick={openMic}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={"w-6 h-6 stroke-" + color + " fill-" + color + " hover:stroke-sky-400 hover:fill-sky-400"} onClick={clickHandler}>
                    <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z"/>
                    <path
                        d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z"/>
                </svg>
            </button>
        </div>
    );
}

export default QueryMoment;