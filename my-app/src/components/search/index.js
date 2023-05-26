import React, { useState } from "react";
import { Spotify } from "react-spotify-embed";
import axios from "axios";
import Track from "../track";

const Search = ({ accessToken }) => {

    const [ tracks, setTracks ] = useState({});
    const [ search, setSearch ] = useState(""); 
    const [ player, setPlayer ] = useState(false);
    const [ sound, setSound ] =  useState("");
  
    console.log(tracks.tracks)

    const handleSearch = async () => {

      setPlayer(false);
      setSound("");

      try {
        const response = await axios.get("https://api.spotify.com/v1/search", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            q: search,
            type: "track",
          },
        });
        
        setTracks(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSearch();
    };

    return (
        <div>

          {
            player && sound && <div className="player"><Spotify wide link={sound}/></div>
          }

          <form className="search__container" onSubmit={handleFormSubmit}>
              <input type="text" placeholder="Search a music..." onChange={(e) => setSearch(e.target.value)} />
              <button className="hide">Pesquisar</button>
          </form>

          <div className="track__container">
            {   
                tracks &&
                tracks.tracks &&
                tracks.tracks.items &&
                tracks.tracks.items.length > 0 && tracks.tracks.items.map((track, index) => (
                    <Track 
                        album={track.album.images[1].url} 
                        albumName={track.album.name}
                        name={track.name}
                        artist={track.artists[0].name}
                        duration={track.duration_ms}
                        sound={track.external_urls.spotify}
                        setSound={setSound}
                        setPlayer={setPlayer}
                    />
                ))
            }
          </div>
        </div>
    )
}

export default Search;