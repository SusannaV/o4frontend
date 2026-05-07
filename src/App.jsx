import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import { useState } from 'react'

import Etusivu from './pages/Etusivu'
import Kategoriasivu from './pages/Kategoriasivu'
import Haku from './components/Haku'
import HakutulosLista from './components/HakutulosLista'
import Tuotesivu from './pages/Tuotesivu'


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
      {/* <div className='hakutulos'>
        <Haku setHakutulokset={setHakutulokset} hakuteksti={hakuteksti} setHakuteksti={setHakuteksti} />
        {hakutulokset && hakuteksti.length > 0 && <HakutulosLista hakutulokset={hakutulokset} hakuteksti={hakuteksti} />}
      </div> */}


      <Routes>
        <Route path="/tarjoukset" element={
          <Kategoriasivu sivu={"tarjoukset"} hakutulokset={hakutulokset} setHakutulokset={setHakutulokset} hakuteksti={hakuteksti} setHakuteksti={setHakuteksti} />
        } />
        <Route path="/oheislaitteet" element={
          <Kategoriasivu sivu={"oheislaitteet"}  hakutulokset={hakutulokset} setHakutulokset={setHakutulokset} hakuteksti={hakuteksti} setHakuteksti={setHakuteksti}/>
        } />
        <Route path="/tietokoneet" element={
          <Kategoriasivu sivu={"tietokoneet"}  hakutulokset={hakutulokset} setHakutulokset={setHakutulokset} hakuteksti={hakuteksti} setHakuteksti={setHakuteksti}/>
        } />
        <Route path="/" element={
          <Etusivu  hakutulokset={hakutulokset} setHakutulokset={setHakutulokset} hakuteksti={hakuteksti} setHakuteksti={setHakuteksti}/>
        } />
        <Route path="/tuotesivu" element={
          <Tuotesivu/>
        } />
        
      </Routes>
    </Router>
  )
}
export default App