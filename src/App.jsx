import { useState, useEffect } from 'react'
import axios from 'axios'

import Tuotekortti from './Tuotekortti'

//tuodaan tähän tiedostoon käyttöön Tuotekortti-komponentti.

const App = () => {
  // luodaan useState, joka tallentaa listan nimeltä tuotteet. Tätä listaa päivitetään kutsumalla funktiota setTuotteet
  const [tuotteet, setTuotteet] = useState([])
  console.log('tuotteet', tuotteet)



  //haetaan tuotetiedot serveriltä, tässä pelkästään tarjoukset
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/tarjoukset')
      .then(response => {
        setTuotteet(response.data.tarjoukset)
      })
  }, [])

  //tuotteet.map käy läpi tuotteet-listan ja jokaisen yksittäisen tuotteet kohdalla syöttää Tuotekortille
  //tiedoksi tuotteen tiedot ja id:n (React vaatii id:n aina kun käydään listaa läpi).
  //Palautetaan otsikko ja jokaisesta tuotteesta Tuotekortti.
  return (
    <div>
      <h1>Tarjoukset</h1>
      <div>
        <p>Haku</p>
      </div>
      <div class="container">

        <div class="breadcrumb">
          <p>Breadcrumb</p>
        </div>
        <div class="sivupalkki">
          <p>Sivupalkki</p>
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
export default App