import { useState, useCallback, useMemo } from 'react';
import './App.css';
import VideoPlayer from './VideoPlayer';

function App() {
  
  const [text, setText] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const onPlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const onPause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const videoData = useMemo(() => {
    return {
      title: "Bunny Movie",
      url: "https://www.w3schools.com/html/mov_bbb.mp4" 
    };
  }, []);

  return (
    <div className="App">
      <input type="text" value={text} onChange={(e) => {
        setText(e.target.value);
      }} />
      <span>{text}</span>   

      <div>Video is {isPlaying ? "playing" : "paused"}</div>
      <VideoPlayer 
        src={videoData}
        onPlay={onPlay}
        onPause={onPause}
      /> 
    </div>
  );
}

export default App;