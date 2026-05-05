import { Link } from "react-router";

const Kategoriakortti = ({ kategoria }) => {
  const kategoriaKuvat = {
    Näytöt: "https://upload.wikimedia.org/wikipedia/commons/7/76/MonitorLCDlcd.svg",
    tarjoukset: "https://static6.depositphotos.com/1055089/645/v/950/depositphotos_6457550-stock-illustration-big-sale-discount-advertisement.jpg",
    Kuulokkeet: "https://www.publicdomainpictures.net/pictures/190000/nahled/headphones-14718936931k2.jpg",
    tietokoneet: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_rM7IZZRKTXm1pm1dmpDD_YEZCrwu0KrFA&s",
    Hiiret: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDiAoX6rXY77fdiR1RbEQpCI7lNNhYC4rSiw&s",
    oheislaitteet: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFIKziUD_Ozl8eptchng4qStBIGe9mg7t0Ag&s"
  };
  const valittuKuva = kategoriaKuvat[kategoria]
  return (
    <div className="kategoriakortti">
      <Link to="/tietokoneet" style={{ textTransform: 'capitalize' }}>
      <h2>{kategoria}</h2>
      <img src={valittuKuva} alt={kategoria} />
      </Link>
    </div>)

}

export default Kategoriakortti;

