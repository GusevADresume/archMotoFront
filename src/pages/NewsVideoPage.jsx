import React from "react";
import { useSingleNews } from "../store/store";
import ReactPlayer from "react-player/youtube";

export default function NewsVideoPage() {
  const { content, load } = useSingleNews((state) => ({
    content: state.content,
    load: state.loading,
  }));

  const content1 = {
    header: "ARCH Motorcycle Releases New 1s Model for Production",
    text: "ARCH Motorcycle’s new 1s features a single-sided swingarm, mid-controls for a more aggressive riding position, a 124ci ARCH/S&S V-twin downdraft fuel injected engine, carbon fiber fuel cell and more.",
    url: "https://youtu.be/rkR3rpAwnmM",
  };
  return (
    <div className="NewsVideoPage">
      <div>
        <h1 className="NewsVideoHeader">{content["header"]}</h1>
        <p className="NewsVideoText">{content["text"]}</p>
        <div className="NewsVideoPlayer">
          <ReactPlayer
            controls="true"
            url={content["url"]}
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}
