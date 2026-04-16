const Sivupalkki = () => {
  return (
    <div className="Sivupalkki">
      <p>Kategoria</p>

      <p>Tämä on sivupalkki</p>
      <p>Tämä on sivupalkki</p>
      <p>Tämä on sivupalkki</p>
      <p>Tämä on sivupalkki</p>
      <p>Tämä on sivupalkki</p>
      <form>
        <label>Läppärit:
          <input
            type="checkbox"
            name="Läppärit"
            // checked={inputs.tomato}
            // onChange={handleChange}
          />
        </label>
        <label>Pöytäkoneet:
          <input
            type="checkbox"
            name="Pöytäkoneet"
            // checked={inputs.onion}
            // onChange={handleChange}
          />
        </label>
                <label>Kuulokkeet:
          <input
            type="checkbox"
            name="Kuulokkeet"
            // checked={inputs.onion}
            // onChange={handleChange}
          />
        </label>
                <label>Hiiret:
          <input
            type="checkbox"
            name="Hiiret"
            // checked={inputs.onion}
            // onChange={handleChange}
          />
        </label>
                <label>Näytöt:
          <input
            type="checkbox"
            name="Näytöt"
            // checked={inputs.onion}
            // onChange={handleChange}
          />
        </label>
                <label>Näppäimistöt:
          <input
            type="checkbox"
            name="Näppäimistöt"
            // checked={inputs.onion}
            // onChange={handleChange}
          />
        </label>
      </form>
    </div>
  )
}

export default Sivupalkki