import { Link } from "react-router";

const Kategoriakortti = ({ kategoria }) => {
  const kategoriaKuvat = {
    tarjoukset: "https://static6.depositphotos.com/1055089/645/v/950/depositphotos_6457550-stock-illustration-big-sale-discount-advertisement.jpg",
    tietokoneet: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_rM7IZZRKTXm1pm1dmpDD_YEZCrwu0KrFA&s",
    oheislaitteet: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFIKziUD_Ozl8eptchng4qStBIGe9mg7t0Ag&s"
  };
  const valittuKuva = kategoriaKuvat[kategoria]
  return (
    <div className="kategoriakortti">
      <Link to={`/${kategoria}`} style={{ textTransform: 'capitalize' }}>
      <h2>{kategoria}</h2>
      <img src={valittuKuva} alt={kategoria} />
      </Link>
    </div>)

}

export default Kategoriakortti;

