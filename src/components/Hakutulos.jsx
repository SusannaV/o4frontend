import { Link } from "react-router";
const Hakutulos = ({ tulos }) => {

  //Palauttaa nimen ja linkin tuotesivulle hakutuloksesta
  return (
    <div className="hakutulos">
      <p>
        <Link to="/tuotesivu" state={{ kategoria: tulos.kategoria }}>
          {tulos.nimi}
        </Link>
      </p>
    </div>
  )
}

export default Hakutulos