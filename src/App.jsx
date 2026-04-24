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
  console.log('hakutulokset',hakutulokset)

  const padding = {
    padding: 5
  }

  // Lisätty Haku-komponentti, jonne voi kirjoittaa hakua
  // Hakutuloslista renderöidään vain, jos hakutulokset-listassa on elementtejä
  // Muoto on {onko hakutulokset lista ei-tyhjä} ja onko {hakutulosten pituus yli 0} ja jos molemmat palauttavat true, renderöidään
  // <Hakutuloslista>. Muuten ei renderöidä mitään.

  return (
    <Router>
      <div>
        <Link style={padding} to="/">Etusivu</Link>
        <Link style={padding} to="/tarjoukset">tarjoukset</Link>
        <Link style={padding} to="/oheislaitteet">oheislaitteet</Link>
        <Link style={padding} to="/tietokoneet">tietokoneet</Link>
        <div>
          <Haku setHakutulokset={setHakutulokset}/>
          {hakutulokset && hakutulokset.length > 0 && <HakutulosLista hakutulokset={hakutulokset} />}
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