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

  const sivut = ["tarjoukset", "oheislaitteet", "tietokoneet"]

  //Määritellään sivujen osoitteet ja niille menevät propsit. Käydään kaikki kategoriasivut läpi, koska niille
  //menevät propsit on samoja 
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Etusivu hakutulokset={hakutulokset} setHakutulokset={setHakutulokset} hakuteksti={hakuteksti} setHakuteksti={setHakuteksti} />
        } />
        <Route path="/tuotesivu" element={
          <Tuotesivu setHakuteksti={setHakuteksti}/>
        } />
                {sivut.map((sivu) => (
          <Route path={sivu} key={sivu} element={
            <Kategoriasivu sivu={sivu} hakutulokset={hakutulokset} setHakutulokset={setHakutulokset} hakuteksti={hakuteksti} setHakuteksti={setHakuteksti} />
          } />
        ))}
      </Routes>
    </Router>
  )
}
export default App