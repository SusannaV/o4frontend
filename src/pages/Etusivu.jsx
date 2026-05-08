
import Haku from '../components/Haku';
import HakutulosLista from '../components/HakutulosLista'
import Kategoriakortti from '../components/Kategoriakortti';
import logo from '../assets/Werkkokauppa logo.png'
import ostoskori from '../assets/Ostoskori Werkkokauppa 2.png'

const Etusivu = ({ hakutulokset, setHakutulokset, hakuteksti, setHakuteksti }) => {
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
    </div>
  )
}

export default Etusivu