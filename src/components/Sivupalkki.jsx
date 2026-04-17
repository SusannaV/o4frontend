const Sivupalkki = ({ suodattimet, muutaSuodatin }) => {
  const kategoriaVaihtoehdot = ['Läppärit', 'Pöytäkoneet', 'Kuulokkeet', 'Hiiret', 'Näytöt', 'Näppäimistöt'];
  const valmistajaVaihtoehdot = ['Acer', 'Apple', 'Asus', 'Corsair', 'Glorious', 'HP', 'JBL', 'Keychron', 'Lenovo', 'Logitech', 'MSI', 'Razer', 'Sony', 'SteelSeries'];


  // Täällä käytään läpi kaikki kategoriavaihtoehdot ja jokaisesta näytetään nimi sekä checkbox-ruutu. Kun käydään läpi
  // jokainen vaihtoehto, kullekin näytettävälle riville saadaan samalla annettua oikea funktio sille, mitä tapahtuu kun checkboxin
  //tilaa muutetaan (muutaSuodatin()-funktio, joka on määritelty Tuotesivulla).

  //To do: lisää koko-valinta

  return (
    <div className="Sivupalkki">
      <h3>Suodattimet</h3>
      <h4>Kategoria</h4>

      <form>
        {kategoriaVaihtoehdot.map(nimi => (
          <label key={nimi}>
            <input
              type="checkbox"
              name={nimi}
              checked={suodattimet.kategoriat.includes(nimi)}
              onChange={() => muutaSuodatin('kategoriat', nimi)}
            />
            {nimi}
          </label>
        ))}
      </form>

      <h4>Valmistaja</h4>
      <form>
        {valmistajaVaihtoehdot.map(nimi => (
           <label key={nimi}>
            <input
              type="checkbox"
              name={nimi}
              checked={suodattimet.valmistajat.includes(nimi)}
              onChange={() => muutaSuodatin('valmistajat', nimi)}
            />
            {nimi}
          </label>
        ))}
      </form>
    </div>
  )
}

export default Sivupalkki