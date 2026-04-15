const Tuotekortti = ({ tuote }) => {
  //console.log(tuote.ominaisuudet)

  //Renderöidään tuotteesta nimi, hinta, kolme ominaisuutta (tämänkin voisi tehdä .map-funtiolla) sekä sama kuva kaikille tuotteille

  return (
    <div>
      <h2>{tuote.nimi}</h2>
      <p>{tuote.hinta} €</p>
      <p>{tuote.ominaisuudet[0]}</p>
      <p>{tuote.ominaisuudet[1]}</p>
      <p>{tuote.ominaisuudet[2]}</p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/76/MonitorLCDlcd.svg"
        alt="Kuva tietokoneesta" style={{ width: '100%', maxWidth: '100px', borderRadius: '8px' }} />
    </div>)
}

//palautetaan 1. rivillä määritelty Tuotekortti-komponentti käyttöön
export default Tuotekortti