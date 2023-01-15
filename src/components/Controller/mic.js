import "./audioRecorder";
import {recordAudio} from "./audioRecorder";
let r = window.webkitSpeechRecognition; 

let depr = true;
let started = false;

const openMic = () => {
    
    if (depr) {
        (async () => {
            if (!started) {
                const recorder = await recordAudio();
                recorder.start();
                started = true;
            } else {
                started = false;
            }
        })();
        depr = false
    } else {
        depr = true;
    }
}


export default openMic;