import { useState } from 'react'
import './VolumeBar.css'

function VolumeBar() {
  const [volume, setVolume] = useState(1);

  const handleVolumeChage = (event) => {
    const newVolume = event.target / 100
    setVolume(newVolume)
  }

  const handleMute = () => {
    setVolume(0)
  }

  const handleUnmute = () => {
    setVolume(0.5)
  }

  const handleMax = () => {
    setVolume(1)
  }


  return (
    <div className="volume-bar">
      <input type="range" min="0" max="100" step="1" value={volume * 100} onChange={handleVolumeChage} />
      <button onClick={handleMute} disabled={volume === 0}>Tắt Tiếng</button>
      <button onClick={handleUnmute} disabled={volume === 0.5}>Vừa</button>
      <button onClick={handleMax} disabled={volume > 0.5}>Max Tiếng</button>
      <span className="volume-indicator">{volume.toFixed(2)}</span>
    </div>
  )
}
export default VolumeBar;