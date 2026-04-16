import { useState, useEffect } from 'react'
import axios from 'axios'

import Tuotekortti from './Tuotekortti'
import Sivupalkki from './Sivupalkki'

const Tuotesivu = ({sivu}) => {
  const [tuotteet, setTuotteet] = useState([])
  console.log('tuotteet', tuotteet)

  const url = `http://localhost:3001/api/${sivu}`

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setTuotteet(response.data[sivu])
      })
  }, [url, sivu])

  return (
    <div>
      <h1>{sivu}</h1>
      <div>
        <p>Haku</p>
      </div>
      <div class="container">

        <div class="breadcrumb">
          <p>Breadcrumb</p>
        </div>
        <div class="sivupalkki">
          <Sivupalkki/>
        </div>
        <div class="lajittelu">
          <p>Lajittelu</p>
        </div>
        <div class="tuotecontainer">
          {tuotteet.map(tuote =>
            <Tuotekortti tuote={tuote} key={tuote.id} />)}
        </div>
      </div>
    </div>
  )
}
export default Tuotesivu