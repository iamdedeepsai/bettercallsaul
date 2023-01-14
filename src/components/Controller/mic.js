import "./audioRecorder";
import {recordAudio} from "./audioRecorder";

let depr = true;
let started = false;

const openMic = () => {

    if (depr) {
        (async () => {
            const recorder = await recordAudio();
            if (!started) {
                recorder.start();
                started = true;
            } else {
                started = false;
                recorder.stop();
            }
        })();
        depr = false
    } else {
        depr = true;
    }
}


export default openMic;