
import Kategoriakortti from './Kategoriakortti';



const Etusivu = () => {
  return (
    <div className='etusivu'>
      <h1>
        Tervetuloa Werkkokauppaan!
      </h1>
      <div className="routelinkit">
        <Kategoriakortti kategoria="tietokoneet"/>
        <Kategoriakortti kategoria="oheislaitteet"/>
        <Kategoriakortti kategoria="tarjoukset"/>
      </div>
    </div>
  )
}

export default Etusivu