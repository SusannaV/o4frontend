import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import Etusivu from './components/Etusivu'
import Tuotesivu from './components/Tuotesivu'


const App = () => {
  const padding = {
    padding: 5
  }
  return (
    <Router>
      <div>
        <Link style={padding} to="/">Etusivu</Link>
        <Link style={padding} to="/tarjoukset">tarjoukset</Link>
        <Link style={padding} to="/oheislaitteet">oheislaitteet</Link>
        <Link style={padding} to="/tietokoneet">tietokoneet</Link>
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