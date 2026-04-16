import { useState, useEffect } from 'react'
import axios from 'axios'

import Tuotekortti from './Tuotekortti'

//tuodaan tähän tiedostoon käyttöön Tuotekortti-komponentti.

const App = () => {
  // luodaan useState, joka tallentaa listan nimeltä tuotteet. Tätä listaa päivitetään kutsumalla funktiota setTuotteet
  const [tuotteet, setTuotteet] = useState([])
  console.log('tuotteet', tuotteet)



  //haetaan tuotetiedot serveriltä, tässä pelkästään oheislaitteet
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/oheislaitteet')
      .then(response => {
        setTuotteet(response.data.oheislaitteet)
      })
  }, [])

  //tuotteet.map käy läpi tuotteet-listan ja jokaisen yksittäisen tuotteet kohdalla syöttää Tuotekortille
  //tiedoksi tuotteen tiedot ja id:n (React vaatii id:n aina kun käydään listaa läpi).
  //Palautetaan otsikko ja jokaisesta tuotteesta Tuotekortti.
  return (
    <div>
      <h1>Tarjoukset</h1>
      {tuotteet.map(tuote =>
        <Tuotekortti tuote={tuote} key={tuote.id} />)}
    </div>
  )
}
export default App