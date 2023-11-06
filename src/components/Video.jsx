import React from "react";
import playArrow from "../assets/images/preloadArroy.png";
import ReactPlayer from "react-player/youtube";
import { useState } from "react";

export default function Video({ preview, url }) {
  const [visiblePreview, setVisible] = useState(false);
  const videoPlayHandler = () => {
    setVisible(true);
  };
  const endVideo = () => setVisible(false);
  return (
    <div className="FullScrinVideo">
      <div className={visiblePreview ?"FullScrinPreview" : "hidden"}>
      <ReactPlayer
        onEnded={endVideo}
        playing={visiblePreview}
        preview={true}
        controls="true"
        url={url}
        width="100%"
        height="100%"
      />
      </div>
      <div className={visiblePreview ?"hidden":"VideoSize"}>
      <video
        className={visiblePreview ? "hidden" : "FullScrinPreview"}
        src={preview}
        autoPlay
        loop
        playsInline
        muted
        preload="True"
      ></video>
      </div>
      <img
        onClick={videoPlayHandler}
        className={visiblePreview ? "hidden" : "prewievArroy"}
        src={playArrow}
        alt=""
      />
    </div>
    
  );
}

