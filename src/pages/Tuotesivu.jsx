import Breadcrumb from '../components/Breadcrumb'
import { useLocation } from 'react-router-dom'
import tuoteSivuKuva from '../assets/Tuotesivu.jpg'

const Tuotesivu = () => {
  const location = useLocation();
  const kategoriaNimi = location.state?.kategoria || 'Tietokoneet';

  let kategoriaOsoite = "";

  if (kategoriaNimi === "Näytöt" || kategoriaNimi === "Kuulokkeet" || kategoriaNimi === "Hiiret"
    || kategoriaNimi === "Näppäimistöt") {
    kategoriaOsoite = "oheislaitteet"
  }
  else if (kategoriaNimi === "Läppärit" || kategoriaNimi === "Pöytäkoneet") {
    kategoriaOsoite = "tietokoneet"
  }

  return (
    <div>
      <Breadcrumb sivu="tuotesivu" kategoria={kategoriaOsoite} />
      Hei, olen tuotesivu
      <img src={tuoteSivuKuva} alt="Kuva tuotesivun prototyypista" />
    </div>
  )

}

export default Tuotesivu