import React, { useEffect, useState } from "react";

const Track = ({ 
  album, 
  albumName, 
  name, 
  artist, 
  duration, 
  sound, 
  setSound,
  setPlayer,
}) => {

  const [ durationFormatted, setDurationFormatted ] = useState("");

  const playMusic = () => {
    setSound(sound);
    setPlayer(true);
  }

  useEffect(() => {
    var minutos = Math.floor(duration / 60000);
    var segundos = Math.floor((duration % 60000) / 1000);

    segundos = segundos < 10 ? "0" + segundos : segundos;
    setDurationFormatted(minutos + ":" + segundos);
  }, [duration])

  return (
    <div onClick={() => playMusic()} className="track__card">
      <img src={album} alt={name} />
      <h2>{name}</h2>
      <div>
        <span>{artist}</span>
        <span>{durationFormatted}</span>
      </div>
      <p>{albumName}</p>    
    </div>
  );
};

export default Track;
