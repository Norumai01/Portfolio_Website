import {useRef, useState} from "react";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

interface MusicProps {
  audioSource?: string;
}

const BackgroundMusic: React.FC<MusicProps> = ({ audioSource }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.volume = 0.05;
        audioRef.current.play();
        console.log("Light at the End of the Tunnel - Jom Bee (Lofi hip-hop). Special thanks to: Jom Bee.")
      }
      setIsPlaying(!isPlaying);
    }
  }

  return (
    <div id="background-music">
      <audio ref={audioRef} src={audioSource} loop={true} />
      <button onClick={toggleMusic} className="cursor-pointer">
        {isPlaying ? (
          <VolumeOffIcon className="text-white hover:text-[#FF6B9D]" fontSize={"medium"} />
        ) : (
          <VolumeUpIcon className="text-white hover:text-[#FF6B9D]" fontSize={"medium"} />
        )}
      </button>
    </div>
  )
}

export default BackgroundMusic;