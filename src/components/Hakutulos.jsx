const Hakutulos = ({ tulos }) => {

  //Palauttaa nimen hakutuloksesta. Tänne voisi lisätä jonkun alertin siitä, että käyttäjä on klikannut tuotetta, koska
  // me ei nyt toteuteta tuotesivuja
  return (
    <div className="hakutulos">
      <p>
        {tulos}
      </p>
      {/* <div
      className="hakutulos"
      onClick={(e) => alert(`Valitsit ${tulos}!`)}>
      {tulos}
    </div> */}
    </div>
  )
}

export default Hakutulos