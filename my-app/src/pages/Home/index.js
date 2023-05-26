import React from "react";
import { useEffect, useState } from "react";
import Login from "../../components/login";
import Search from "../../components/search";

const HomePage = () => {

    const [accessToken, setAccessToken] = useState("");  

    const clientId = "6e5d94314bb942c2b2e7c963eb8cd176";
    const redirectUri = "https://player-by-spotify-s2nb.vercel.app/";
    const scopes = ["user-read-private", "user-read-email"];

    const handleLogin = () => {
        window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(
          redirectUri
        )}&scope=${encodeURIComponent(scopes.join(" "))}&response_type=token`;
    };    

    const handleAccessToken = () => {
        const params = new URLSearchParams(window.location.hash.substr(1));
        const accessToken = params.get("access_token");
        setAccessToken(accessToken);
      };
    
    // Checa se existe um token de acesso na URL ao carregar a página
    useEffect(() => {
        handleAccessToken();
    }, []);


    return (
        <div>
            {accessToken ? (
                <Search accessToken={accessToken}/>
            ) : (
                <Login handleLogin={handleLogin}/>
            )}
        </div>
    )
}

export default HomePage;