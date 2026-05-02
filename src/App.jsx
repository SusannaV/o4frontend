import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import { useState } from 'react'

import Etusivu from './components/Etusivu'
import Tuotesivu from './components/Tuotesivu'
import Haku from './components/Haku'
import HakutulosLista from './components/HakutulosLista'


const App = () => {
  const [hakutulokset, setHakutulokset] = useState([])
    const [hakuteksti, setHakuteksti] = useState("")


  // Lisätty Haku-komponentti, jonne voi kirjoittaa hakua
  // Hakutuloslista renderöidään vain, jos hakutulokset-listassa on elementtejä
  // Muoto on {onko hakutulokset lista ei-tyhjä} ja jos tämä on true, renderöidään
  // <Hakutuloslista>. Muuten ei renderöidä mitään.

  //Lisätty hakutulosten renderöintiehdoksi sen, että hakutulostekstin pituuden täytyy olla enemmän kuin 0

  return (
    <Router>
      <div className='routelinkit'>
        <Link to="/">Etusivu</Link>
        <Link to="/tarjoukset">Tarjoukset</Link>
        <Link to="/oheislaitteet">Oheislaitteet</Link>
        <Link to="/tietokoneet">Tietokoneet</Link>
        <div className='hakutulos'>
          <Haku setHakutulokset={setHakutulokset} hakuteksti={hakuteksti} setHakuteksti={setHakuteksti}/>
          {hakutulokset && hakuteksti.length > 0 && <HakutulosLista hakutulokset={hakutulokset} hakuteksti={hakuteksti} />}
        </div>
      </div>

      <Routes>
        <Route path="/tarjoukset" element={
          <Tuotesivu sivu={"tarjoukset"} />
        } />
        <Route path="/oheislaitteet" element={
          <Tuotesivu sivu={"oheislaitteet"} />
        } />
        <Route path="/tietokoneet" element={
          <Tuotesivu sivu={"tietokoneet"} />
        } />
        <Route path="/" element={
          <Etusivu sivu={"etusivu"} />
        } />
      </Routes>
    </Router>
  )
}
export default App