const Sivupalkki = ({suodattimet, muutaSuodatin, hintaSuodattimet, muutaHintaSuodatin, tyhjennäSuodattimet}) => {
    const kategoriaVaihtoehdot = ['Läppärit', 'Pöytäkoneet', 'Kuulokkeet', 'Hiiret', 'Näytöt', 'Näppäimistöt'];
    const valmistajaVaihtoehdot = ['Acer', 'Apple', 'Asus', 'Corsair', 'Glorious', 'HP', 'JBL', 'Keychron', 'Lenovo', 'Logitech', 'MSI', 'Razer', 'Sony', 'SteelSeries'];
    const kokoVaihtoehdot = ['13', '14', '15', '16', '17', '18', '24', '27'];

    // Täällä käytään läpi kaikki kategoriavaihtoehdot ja jokaisesta näytetään nimi sekä checkbox-ruutu. Kun käydään läpi
    // jokainen vaihtoehto, kullekin näytettävälle riville saadaan samalla annettua oikea funktio sille, mitä tapahtuu kun checkboxin
    // tai kentän tilaa muutetaan (muutaSuodatin()-funktio, joka on määritelty Tuotesivulla).
    // Koon valinnassa otetaan stringistä vain 2 ekaa merkkiä, jolloin esim. 17" ja 17.3" tulevat valituksi jos käyttäjä
    // valitsee listasta kohdan 17".

    return (
        <div className="Sivupalkki">
            <h3>Suodattimet</h3>

            <h4>Kategoria</h4>
            <form className="form2">
                <div className="checkbox">
                {kategoriaVaihtoehdot.map(nimi => (
                    <div className="rivit">
                    <label key={nimi}>
                        <input
                            type="checkbox"
                            name={nimi}
                            checked={suodattimet.kategoriat.includes(nimi)}
                            onChange={() => muutaSuodatin('kategoriat', nimi)}
                        />
                        {nimi}
                    </label>
                    </div>
                ))}
                </div>

            </form>

            <h4>Hinta</h4>
            <form class="Hinta">
                <label key="minhinta">
                    Min
                    <input type="number" name="minHinta" value={hintaSuodattimet.minHinta}
                           max={hintaSuodattimet.maxHinta}
                           onChange={(e) => {
                               const uusiArvo = Number(e.target.value);
                               muutaHintaSuodatin('minHinta', uusiArvo)
                           }}
                    />
                </label>

                <label key="maxhinta">
                    <span>Max</span>
                    <input type="number" name="maxHinta" value={hintaSuodattimet.maxHinta}
                           min={hintaSuodattimet.minHinta}
                           onChange={(e) => {
                               const uusiArvo = Number(e.target.value);
                               muutaHintaSuodatin('maxHinta', uusiArvo)
                           }}/>

                </label>

            </form>

            <h4>Valmistaja</h4>
            <form className="form2">
                <div className="checkbox">
                    {valmistajaVaihtoehdot.map(nimi => (
                        <div className="rivit">
                            <label key={nimi}>

                                <input
                                    type="checkbox"
                                    name={nimi}
                                    checked={suodattimet.valmistajat.includes(nimi)}
                                    onChange={() => muutaSuodatin('valmistajat', nimi)}
                                />


                                {nimi}
                            </label>
                        </div>

                    ))}
                </div>
            </form>

            <h4>Näytön koko</h4>
            <form className="form2">
                <div className="checkbox">
                {kokoVaihtoehdot.map(nimi => (
                    <div className="rivit">
                    <label key={nimi}>
                        <input
                            type="checkbox"
                            name={nimi}
                            checked={suodattimet.koot.includes(nimi)}
                            onChange={() => muutaSuodatin('koot', nimi)}
                        />
                        {nimi}"
                    </label>
                    </div>
                ))}
                    </div>
            </form>

            <button onClick={tyhjennäSuodattimet}>
                Tyhjennä kaikki suodattimet
            </button>

        </div>
    )
}

export default Sivupalkki