import React from 'react'

const Artist = ({ artistResult }) => {
  if (Object.keys(artistResult).length === 0) return null

  return (
    <div className="col-12 col-sm-10 col-md-5 offset-sm-1 offset-md-0">
      <div className="card w-100">
        <img src={artistResult.thumbnail} alt="Artista" className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title">{artistResult.name}</h2>
          <p className="card-text">{artistResult.biography}</p>
        </div>
      </div>
    </div>
  )
}

export default Artist
