import React from "react";
import ReactPlayer from 'react-player/lazy'

function VideoPlayer() {
    return (
        <ReactPlayer
        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
        width='100%'
        height='100vh'
        />
    )
}

export default VideoPlayer;