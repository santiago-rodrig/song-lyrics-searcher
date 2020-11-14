import React, { useState } from "react";

const Form = () => {
  const [queryData, setQueryData] = useState({song: '', artist: ''})
  const [error, setError] = useState(false)

  const handleChange = e => {
    setQueryData({
      ...queryData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (queryData.artist.trim() === '' || queryData.song.trim() === '') {
      setError(true)

      return
    }

    setError(false)
  }

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row pt-4">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 offset-sm-1 offset-md-2 offset-lg-3">
            { error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null }
          </div>
          <form className="col-12 card text-white bg-transparent mb-5 pt-3 pb-2" onSubmit={handleSubmit}>
            <fieldset>
              <legend className="text-center">Buscador de Líricas</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input type="text" className="form-control" name="artist" placeholder="The Strokes" value={queryData.artist} onChange={handleChange} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Canción</label>
                    <input type="text" className="form-control" name="song" placeholder="Selfless" value={queryData.song} onChange={handleChange} />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">Buscar</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Form;
