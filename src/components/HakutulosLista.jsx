import Hakutulos from './Hakutulos'

const HakutulosLista = ({hakutulokset}) => {
  //Tämä komponentti renderöi listan niistä tuloksista, jotka Haku-komponentissa on filtteröity vastaamaan hakutuloksia
  //Palauttaa monta Hakutulos-komponenttia

  //Lisätty rajoitus, eli näytetään vain 5 ensimmäistä tuotetta
  const rajoitettuHaku = hakutulokset.splice(0, 5)

  return(
    <div className="hakutuloslista">
      {rajoitettuHaku.map((tulos) => {
        return <Hakutulos tulos={tulos.nimi} key={tulos.id} />;
      })}
    </div>
  )
}

export default HakutulosLista