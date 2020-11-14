import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios'
import Form from "./components/Form";
import ErrorComponent from './components/ErrorComponent'

function App() {
  const [lyricsQuery, setLyricsQuery] = useState({})
  const [failedLyricsQuery, setFailedLyricsQuery] = useState(false)
  const [lyricsResult, setLyricsResult] = useState('')

  useEffect(() => {
    if (Object.keys(lyricsQuery).length !== 0) {
      const APIKey = 'poNDovkiw6ms0nwOYAeY6vR39FfWMbwe7uah34dZam9WuHy2cvzina7xXgrkziiD'
      const lyricsURL = `https://orion.apiseeds.com/api/music/lyric/${lyricsQuery.artist}/${lyricsQuery.song}?apikey=${APIKey}`
      let artistURL = 'https://www.theaudiodb.com/api/v1/json/1/search.php?s='

      axios.get(lyricsURL)
        .then(payload => {
          setFailedLyricsQuery(false)
          artistURL += payload.data.result.artist.name

          axios(artistURL)
            .then(payload => {
              // TODO
            })
        })
        .catch(() => setFailedLyricsQuery(true))
    }
  }, [lyricsQuery])

  return (
    <Fragment>
      <Form setLyricsQuery={setLyricsQuery} />
      <div className="container">
        <div className="row">
          { failedLyricsQuery ? <ErrorComponent>No se pudieron encontrar las líricas de esa canción</ErrorComponent> : null}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
