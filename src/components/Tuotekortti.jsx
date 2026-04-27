const Tuotekortti = ({ tuote }) => {

  const kategoriaKuvat = {
    Näytöt: "https://upload.wikimedia.org/wikipedia/commons/7/76/MonitorLCDlcd.svg",
    Läppärit: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV8zNV9waG90b2dyYXBoX29mX2xhcHRvcF9tb2NrdXBfd2l0aF93aGl0ZV9zY3JlZV9kNTFiNjVlZS02Y2RkLTQ0N2UtYmRmZS01MzdiZWZlNmY5NTIucG5n.png",
    Kuulokkeet: "https://www.publicdomainpictures.net/pictures/190000/nahled/headphones-14718936931k2.jpg",
    Pöytäkoneet: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_rM7IZZRKTXm1pm1dmpDD_YEZCrwu0KrFA&s",
    Hiiret: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDiAoX6rXY77fdiR1RbEQpCI7lNNhYC4rSiw&s",
    Näppäimistöt: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFIKziUD_Ozl8eptchng4qStBIGe9mg7t0Ag&s"
  };

  const valittuKuva = kategoriaKuvat[tuote.kategoria] || "https://upload.wikimedia.org/wikipedia/commons/7/76/MonitorLCDlcd.svg";

  return (
    <div className="tuotekortti">
      <h2>{tuote.nimi}</h2>
      <p>{tuote.hinta} €</p>
      <ul>
        <li>{tuote.ominaisuudet[0]}</li>
        <li>{tuote.ominaisuudet[1]}</li>
        <li>{tuote.ominaisuudet[2]}</li>
      </ul>
      <img src={valittuKuva} alt={tuote.kategoria} />
    </div>)
}

export default Tuotekortti