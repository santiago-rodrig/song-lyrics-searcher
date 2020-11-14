import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios'
import Form from "./components/Form";
import ErrorComponent from './components/ErrorComponent'
import Artist from './components/Artist'
import Lyrics from './components/Lyrics'

function App() {
  const [lyricsQuery, setLyricsQuery] = useState({})
  const [failedLyricsQuery, setFailedLyricsQuery] = useState(false)
  const [lyricsResult, setLyricsResult] = useState('')
  const [artistResult, setArtistResult] = useState({})
  const [failedArtistQuery, setFailedArtistQuery] = useState(false)

  useEffect(() => {
    if (Object.keys(lyricsQuery).length !== 0) {
      const APIKey = 'poNDovkiw6ms0nwOYAeY6vR39FfWMbwe7uah34dZam9WuHy2cvzina7xXgrkziiD'
      const lyricsURL = `https://orion.apiseeds.com/api/music/lyric/${lyricsQuery.artist}/${lyricsQuery.song}?apikey=${APIKey}`
      let artistURL = 'https://www.theaudiodb.com/api/v1/json/1/search.php?s='

      axios.get(lyricsURL)
        .then(payload => {
          setFailedLyricsQuery(false)
          setLyricsResult(payload.data.result.track.text)
          artistURL += payload.data.result.artist.name

          axios(artistURL)
            .then(payload => {
              const { strArtistThumb: thumbnail, strBiographyES: biography, strArtist: name } = payload.data.artists[0]

              setFailedArtistQuery(false)

              setArtistResult({
                thumbnail,
                biography,
                name
              })
            })
            .catch(() => {
              setFailedArtistQuery(true)
              setArtistResult({})
            })
        })
        .catch(() => {
          setFailedLyricsQuery(true)
          setLyricsResult('')
          setArtistResult({})
        })
    }
  }, [lyricsQuery])

  return (
    <Fragment>
      <Form setLyricsQuery={setLyricsQuery} />
      <div className="container">
        <div className="row py-5">
          { failedLyricsQuery ? <ErrorComponent>No se pudieron encontrar las líricas de esa canción</ErrorComponent> : null}
          {failedArtistQuery ? <ErrorComponent>No se pudo encontrar información del artista</ErrorComponent> : null}
          <Artist artistResult={artistResult} />
          <Lyrics lyricsResult={lyricsResult} failedArtistQuery={failedArtistQuery} />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
