import { useState, useEffect } from 'react'
import axios from 'axios'

import Tuotekortti from './Tuotekortti'
import Sivupalkki from './Sivupalkki'
import Lajittelu from './Lajittelu'

const Tuotesivu = ({ sivu }) => {
  const [tuotteet, setTuotteet] = useState([])
  const [suodattimet, setSuodattimet] = useState({ kategoriat: [], valmistajat: [], koot: [] })
  const [lajittelu, setLajittelu] = useState("suosituin")

  const url = `http://localhost:3001/api/${sivu}`

  // TIETOJEN HAKU BÄKKÄRILTÄ

  // Haetaan sivun mukaiset tuotteet bäkkäriltä, asetetaan tuotteet-listaan
  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setTuotteet(response.data[sivu])
      })
      .catch(err => console.error("Haku epäonnistui", err))
  }, [url, sivu])


  //SUODATTIMIEN TOIMINTALOGIIKKA

  // Kun jotain suodatinta klikataan, annetaan tälle funktiolle ryhmä (katergoria, valmistaja tai koko) ja arvo (esim. "näytöt" tai "Acer")
  const muutaSuodatin = (ryhmä, arvo) => {
    setSuodattimet(prev => {
      // otetaan nykyiset arvot funktiolle annetusta ryhmästä talteen (siis esim. kaikki tiedot valmistajista)
      const nykyiset = prev[ryhmä];
      // Tarkistetaan, onko valmistajissa jo se arvo, joka funktiolle annettiin (Esim. Acer), saadaan true tai false
      const onkoJoValittu = nykyiset.includes(arvo);

      // Käytetään tertiary-funktiota, jossa luodaan muuttuja uudet, ja kysytään, onkoJoValittu tosi vai ei
      const uudet = onkoJoValittu
        //jos tosi, eli Acer oli jo aiemmin valittuna, filtteröidään se pois ryhmän arvoista. uudet-muuttujaan tallenttaan filtteröity nykyiset-lista
        ? nykyiset.filter(ryh => ryh !== arvo)
        // jos epätosi, lisätään arvo siihen ryhmään. uudet-muuttujaan tallennetaan uusi lista, jossa on nykyiset tiedot + uusi arvo
        : [...nykyiset, arvo];

      // palautetaan muuten samat tiedot, mutta muutetun ryhmän tietoihin päivitetään tilalle uudet-muuttuja
      return {
        ...prev,
        [ryhmä]: uudet
      };
    })
  }

  // NÄYTETTÄVIEN TUOTTEIDEN FILTTERÖINTI

  //Filtteröidään kaikki tuotteet, jotka on haettu bäkkäriltä. Eli käytään jokainen tuote yksi kerrallaan läpi
  const naytettavatTuotteet = tuotteet.filter(tuote => {

    //Eka kategoriat: Käydään läpi useStatessa määritelty suodattimet-lista kategorioiden osalta
    //Jos kategorioissa ei ole mitään valittuna, näytetään kaikki kategoriat
    //Jos on valittu yksi tai useampi kategoria, tarkistetaan suodattimien listasta, onko tämän tällä hetkellä
    //käsittelyssä olevan tuotteen kategoria suodattimien listalla. Jos on, niin näytetään, jos ei, niin filtteröidään pois
    const kategoriaMatch = suodattimet.kategoriat.length === 0 ||
      suodattimet.kategoriat.includes(tuote.kategoria);

    const valmistajaMatch = suodattimet.valmistajat.length === 0 ||
      suodattimet.valmistajat.includes(tuote.merkki);

    const kokoMatch = suodattimet.koot.length === 0 ||
      suodattimet.koot.includes(tuote.koko);

    //Lopuksi lisätään tuote näytettävien listaan vain, jos se läpäisee kaikkien kolmen Matcherin ehdot
    return kategoriaMatch && valmistajaMatch && kokoMatch;
  });


  //NÄYTETTÄVIEN TUOTTEIDEN SORTTAUS

  // Lajitellaan tuotteet käyttäjän valitsemaan järjestykseen. Otetaan naytettavaTuotteet, 
  // tehdään siitä kopio, sortataan se joko halvimmasta kalleimpaan, toisin päin tai 
  // vertaillaan suoraan tuotteella olevaa kenttää, kuten suosio tai arviot.
  // Lajittelu-komponenttia kutsutaan tämän tiedoston returnissa
  const lajitellutTuotteet = [...naytettavatTuotteet].sort((a, b) => {
    if (lajittelu === "halvin") return a.hinta - b.hinta
    if (lajittelu === "kallein") return b.hinta - a.hinta
    return b[lajittelu] - a[lajittelu]
  }
  )


  // Tämä sit näytetään käyttäjälle:
  return (
    <div>
      <h1>{sivu}</h1>
      <div>
        <p>Ostoskori</p>
      </div>
      <div className="container">

        <div className="breadcrumb">
          <p>Breadcrumb</p>
        </div>
        <div className="sivupalkki">
          <Sivupalkki suodattimet={suodattimet} muutaSuodatin={muutaSuodatin} />
        </div>
        <div className="lajittelu">
          <Lajittelu setLajittelu={setLajittelu} />
        </div>
        <div className="tuotecontainer">
          {lajitellutTuotteet.map(tuote =>
            <Tuotekortti tuote={tuote} key={tuote.id} />)}
        </div>
      </div>
    </div>
  )
}
export default Tuotesivu