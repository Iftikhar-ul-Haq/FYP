import React from 'react'
import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam />;
const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};



export default function Camera() {


    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
        },
        [webcamRef]
    );

    return (
        <div className="my-3 p-3 " style={{}}>
            <Webcam className="border "
                audio={false}
                height={720}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
            />
            <button onClick={capture}>Capture photo</button>

        </div >
    )
}
