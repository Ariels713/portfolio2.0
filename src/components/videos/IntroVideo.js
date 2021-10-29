import React from "react";
import VideoPlayer from "react-video-js-player";
import propsVideo from "./reactProps.mp4";
import "./Video.css";
const IntroVideo = () => {
  const videoSrc = propsVideo;

  return (
    <>
      <VideoPlayer src={videoSrc} width="400" height="260" />
    </>
  );
};

export default IntroVideo;
