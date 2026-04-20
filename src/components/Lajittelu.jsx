const Lajittelu = ({ setLajittelu }) => {

  // Annetaan tälle setLajittelu, jolla voidaan viedä valittu lajitteluperuste Tuotesivu-sivulle.
  // Kun selectiä muutetaan, funktio asettaa lajitteluksi valitun valuen

  return (
    <label>
      Lajittelu:
      <select onChange={(e) => setLajittelu(e.target.value)}>
        <option value="suosio">Suosituin ensin</option>
        <option value="halvin">Edullisin ensin</option>
        <option value="kallein">Kallein ensin</option>
        <option value="lisayspvm">Uusin ensin</option>
        <option value="arviot">Arvostelluin ensin</option>
      </select>
    </label>
  )
}

export default Lajittelu