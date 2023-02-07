import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
type Props = { url: string };

const VideoPlayer: React.FC<Props> = ({ url }) => {
  const playOnReady = (e: any) => {
    const { player } = e;
    if (player.isPlaying) return;

    // so beautiful
    player.player.player.play();
  };

  return (
    <ReactPlayer
      url={url}
      loop={true}
      muted={true}
      width="100%"
      height="100%"
      onReady={playOnReady}
      className="react-player"
    />
  );
};

export default VideoPlayer;
