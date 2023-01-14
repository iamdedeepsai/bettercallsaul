import "./audioRecorder";
import {recordAudio} from "./audioRecorder";

let depr = true;

const openMic = () => {
    if (depr) {
        (async () => {
            const recorder = await recordAudio();
            recorder.start();

            setTimeout(async () => {
                const audio = await recorder.stop();
                audio.play();
            }, 3000);
        })();
    } depr = false;
}

export default openMic;