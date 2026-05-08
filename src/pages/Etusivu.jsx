import { useState, useEffect } from 'react'
import axios from 'axios'

import Haku from '../components/Haku';
import HakutulosLista from '../components/HakutulosLista'
import Kategoriakortti from '../components/Kategoriakortti';
import Tuotekortti from '../components/Tuotekortti'
import logo from '../assets/Werkkokauppa logo.png'
import ostoskori from '../assets/Ostoskori Werkkokauppa 2.png'

const Etusivu = ({ hakutulokset, setHakutulokset, hakuteksti, setHakuteksti }) => {
const [tuotteet, setTuotteet] = useState([])
  const url = `http://localhost:3001/api/tarjoukset`
  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setTuotteet(response.data.tarjoukset)
      })
      .catch(err => console.error("Haku epäonnistui", err))
  }, [url])

  return (
    <div className='etusivu'>
      <div className='header-etusivu'>
      <div className='logo-etusivu'>
        <h1><img src={logo} alt="Werkkokaupan logo" /></h1>
      </div>
      <div className='ostoskori'>
        <img src={ostoskori} alt="Ostoskori" />
        <p>Ostoskori</p>
      </div>
      </div>
      <div className='haku-etusivu'>
        <Haku setHakutulokset={setHakutulokset} hakuteksti={hakuteksti} setHakuteksti={setHakuteksti} />
        {hakutulokset && hakuteksti.length > 0 && <HakutulosLista hakutulokset={hakutulokset} hakuteksti={hakuteksti} />}
      </div>
      <div className="routelinkit">
        <Kategoriakortti kategoria="tietokoneet" />
        <Kategoriakortti kategoria="oheislaitteet" />
        <Kategoriakortti kategoria="tarjoukset" />
      </div>
      <h2 className='tarjousotsikko'>Tarjoukset</h2>

      <div className="tuotecontainer-etusivu">
            {tuotteet.length < 1
              ? <p>Yhtään tuotetta ei löytynyt valitsemillasi suodattimilla.
                Kokeile vähentää suodattimia.</p>
              : tuotteet.map(tuote =>
                <Tuotekortti tuote={tuote} key={tuote.id} />)}

          </div>
    </div>
  )
}

export default Etusivu