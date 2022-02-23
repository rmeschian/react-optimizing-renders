import { useRef, memo } from "react";

export default memo(function VideoPlayer({src, onPlay, onPause}) {

    const videoRef = useRef();

    const countRef = useRef(0);
    countRef.current++;

    return (
        <div>
            <p>Call count is {countRef.current}</p>
            <h2>{src.title}</h2>
            <video src={src.url} ref={videoRef} />
            <button onClick={() => {
                videoRef.current.play();
                onPlay();
            }}>Play</button>
            <button onClick={() => {
                videoRef.current.pause();
                onPause();
            }}>Pause</button>
        </div>
    );
});