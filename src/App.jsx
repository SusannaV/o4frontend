
import Tuotekortti from './Tuotekortti'
import { tuotteet } from './tuotteet'

//tuodaan tähän tiedostoon käyttöön Tuotekortti-komponentti.
//tuodaan tähän tiedostoon "tuotteet"-niminen lista tiedostosta tuotteet.json.

const App = () => {
  console.log(tuotteet)


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