import Breadcrumb from '../components/Breadcrumb'
import { useLocation } from 'react-router-dom'
import tuoteSivuKuva from '../assets/Tuotesivu.jpg'

const Tuotesivu = ({setHakuteksti}) => {

  //Tämä tuotesivu tallentaa tiedon siitä, miltä mikä sivu pitäisi näyttää breadcrumbissa.
  const location = useLocation();
  const kategoriaNimi = location.state?.kategoria || 'Tietokoneet';

  let kategoriaOsoite = "";

  //Tässä määritellään, mikä tarkempi kategoria kuuluu mihinkin yleiskategoriaan 
  if (kategoriaNimi === "Näytöt" || kategoriaNimi === "Kuulokkeet" || kategoriaNimi === "Hiiret"
    || kategoriaNimi === "Näppäimistöt") {
    kategoriaOsoite = "oheislaitteet"
  }
  else if (kategoriaNimi === "Läppärit" || kategoriaNimi === "Pöytäkoneet") {
    kategoriaOsoite = "tietokoneet"
  }

  //Nollataan haku, kun siirrytään tuotesivulle
  setHakuteksti("")

  return (
    <div className='tuotesivu'>
      <Breadcrumb sivu="tuotesivu" kategoria={kategoriaOsoite} />
      <h1>Hei, olen tuotesivu</h1>
      <img src={tuoteSivuKuva} alt="Kuva tuotesivun prototyypista" />
    </div>
  )

}

export default Tuotesivu