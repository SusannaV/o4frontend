
import Haku from '../components/Haku';
import HakutulosLista from '../components/HakutulosLista'
import Kategoriakortti from '../components/Kategoriakortti';



const Etusivu = ({hakutulokset, setHakutulokset, hakuteksti, setHakuteksti}) => {
  return (
    <div className='etusivu'>
      <h1>
        Tervetuloa Werkkokauppaan!
      </h1>
      <div className='haku-etusivu'>
      <Haku setHakutulokset={setHakutulokset} hakuteksti={hakuteksti} setHakuteksti={setHakuteksti} />
      {hakutulokset && hakuteksti.length > 0 && <HakutulosLista hakutulokset={hakutulokset} hakuteksti={hakuteksti} />}
      </div>
      <div className="routelinkit">
        <Kategoriakortti kategoria="tietokoneet"/>
        <Kategoriakortti kategoria="oheislaitteet"/>
        <Kategoriakortti kategoria="tarjoukset"/>
      </div>
    </div>
  )
}

export default Etusivu