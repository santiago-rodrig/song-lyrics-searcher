import React, { useState } from "react";

const Form = () => {
  const [queryData, setQueryData] = useState({song: '', artist: ''})

  const handleChange = e => {
    setQueryData({
      ...queryData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form className="col card text-white bg-transparent mb-5 pt-5 pb-2">
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
