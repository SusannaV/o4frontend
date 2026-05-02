import { Link } from "react-router";


const Etusivu = () => {
  return (
    <div className='etusivu'>
      <h1>
        Tervetuloa Werkkokauppaan!
      </h1>
      <div className="routelinkit">
        <Link to="/tietokoneet">Tietokoneet</Link>
        <Link to="/oheislaitteet">Oheislaitteet</Link>
        <Link to="/tarjoukset">Tarjoukset</Link>
      </div>
    </div>
  )
}

export default Etusivu