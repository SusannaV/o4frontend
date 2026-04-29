import Hakutulos from './Hakutulos'

const HakutulosLista = ({hakutulokset, hakuteksti}) => {
  //Tämä komponentti renderöi listan niistä tuloksista, jotka Haku-komponentissa on filtteröity vastaamaan hakutuloksia
  //Palauttaa monta Hakutulos-komponenttia

  //Lisätty rajoitus, eli näytetään vain 5 ensimmäistä tuotetta
  const rajoitettuHaku = hakutulokset.splice(0, 5)

  //Lisätty jos käyttäjä on kirjoittanut hakuun jotain, mutta tuloksia on 0, näytetään
  // "Ei yhtään tulosta antamillasi hakusanoilla"

  return(
    <div className="hakutuloslista">
      {rajoitettuHaku.length < 1 && hakuteksti.length > 0 ? <p>Ei yhtään tulosta antamillasi hakusanoilla</p> : 
      rajoitettuHaku.map((tulos) => {
        return <Hakutulos tulos={tulos.nimi} key={tulos.id} />;
      })}
    </div>
  )
}

export default HakutulosLista