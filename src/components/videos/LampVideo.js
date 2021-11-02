import React from "react"
import VideoPlayer from "react-video-js-player"
import props from "./reactProps.mp4"
import "./Video.css"

const LampVideo = () => {
  const videoSrc = props

  return (
    <>
      <VideoPlayer src={videoSrc} width="350" height="280" />
    </>
  )
}

export default LampVideo
