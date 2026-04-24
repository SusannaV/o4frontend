import Hakutulos from './Hakutulos'

const HakutulosLista = ({hakutulokset}) => {
  //Tämä komponentti renderöi listan niistä tuloksista, jotka Haku-komponentissa on filtteröity vastaamaan hakutuloksia
  //Palauttaa monta Hakutulos-komponenttia

  return(
    <div className="hakutuloslista">
      <p>Tässä näytetään tuotteita, kun niitä haetaan</p>
      {hakutulokset.map((tulos) => {
        return <Hakutulos tulos={tulos.nimi} key={tulos.id} />;
      })}
    </div>
  )
}

export default HakutulosLista