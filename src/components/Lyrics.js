import React from 'react'

const Lyrics = ({ lyricsResult, failedArtistQuery }) => {
  if (lyricsResult.trim() === '') return null

  let strClass

  if (failedArtistQuery) {
    strClass = 'col-12 col-sm-10 offset-sm-1'
  } else {
    strClass = 'col-12 col-sm-10 col-md-6 offset-sm-1 offset-md-1'
  }

  return (
    <div className={strClass}>
      <div className="card w-100">
        <div className="card-body">
          <h2 className="card-title">Líricas</h2>
          <p className="card-text">{lyricsResult}</p>
        </div>
      </div>
    </div>
  )
}

export default Lyrics
