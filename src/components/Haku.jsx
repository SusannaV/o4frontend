import { useState, useEffect } from 'react'
import axios from 'axios'

const Haku = ({ setHakutulokset, hakuteksti, setHakuteksti }) => {

  const [kaikkiTuotteet, setKaikkiTuotteet] = useState([])


  //Haetaan kaikki tuotteet (tietokoneet ja oheislaitteet) yhden kerran bäkkäriltä talteen hakua varten

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3001/api/tietokoneet"),
      axios.get("http://localhost:3001/api/oheislaitteet")
    ])
      .then(([resTietokoneet, resOheislaitteet]) => {
        const kaikkiVastaukset = [
          ...resTietokoneet.data.tietokoneet,
          ...resOheislaitteet.data.oheislaitteet
        ];
        setKaikkiTuotteet(kaikkiVastaukset);
      })
      .catch(err => console.error("Haku epäonnistui", err))
  }, [])

  // Hakukentän muutoksista huolehtiva handler, asettaa kenttään kirjoitetun tekstin hakuteksti-muuttujaan
  // ja suodattaa samalla hakua vastaavat tuotteet käyttäen suodataHakutulokset-funktiota
  const handleHakuChange = (event) => {
    const uusiHakuteksti = event.target.value
    setHakuteksti(uusiHakuteksti)
    setHakutulokset(suodataHakutulokset(uusiHakuteksti))
  }

  // Suodattaa kaikista tuotteista ne, joiden nimi tai valmistaja vastaa hakukenttään kirjoitettua tekstiä. Tähän voi lisätä
  // myös muista kenttiä suodatettavaksi, kuten ominaisuudet, jos halutaan
  const suodataHakutulokset = (uusiHakuteksti) => {
    return (
      kaikkiTuotteet
        .filter(tuote => tuote.nimi.toLowerCase().includes(uusiHakuteksti.toLowerCase())
          || tuote.merkki.toLowerCase().includes(uusiHakuteksti.toLowerCase())
        ))
  }
  // {
  //   "id": 1,
  //   "nimi": "Acer Predator XB273",
  //   "hinta": 499.9,
  //   "ominaisuudet": ["144Hz virkistystaajuus", "G-Sync", "IPS"],
  //   "koko": "27\"",
  //   "merkki": "Acer",
  //   "lisayspvm": "2024-02-15",
  //   "arviot": 3.8,
  //   "suosio": 5,
  //   "kategoria": "Näytöt",
  //   "alennuksessa": true
  // },

  return (
    <form className='hakukenttä'>
      <input
        name="haku"
        placeholder="Hae tuotteita"
        value={hakuteksti}
        onChange={handleHakuChange} />
    </form>
  )
}

export default Haku