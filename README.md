# Werkkokauppa frontend

Käynnistetään komennolla npm run dev  
Sovellus käynnistyy osoitteeseen http://localhost:5173/  
Pysäytetään komentorivillä ctrl + c  


To do:
- Tuotekorttien muotoilu alkuperäisen suunnitelman mukaiseksi
- Tuotekorteissa luettelopisteiden ja tekstin sijoitus yhtenäiseksi
- Suodattimien tyylittely
- Lajittelun tyylittely
- Logon lisääminen
- Ostoskori-ikonin lisääminen
- Hakutuloslistan renderöinti lyhyempänä ja jotenkin laatikkomaisena
- Kaikkien elementtien sijoittelu täsmäämään vaaka- ja pystysuunnassa keskenään

- Navigoinnin siirtäminen oikeampaan paikkaan (breadcrumbin tilalle) (useNavigate?)
- Etusivun teko
- Siirtymien toteuttaminen muille sivuille
- Muiden sivujen teko, jos ne tehdään

Voisi olla kiva:
- Koot suodatetaan nyt .slicella. Jos dataan tulisi kokoja, jotka ovat alle 10 tai yli 99 tuumaa, ei koodi toimi.

Testattava:
- Hinta-suodattimen toiminta. Mielestäni kenttä tarkistaa nyt syötteet, eikä kaadu virheisiin.
- Koko-suodattimen toiminta. Mielestäni pitäis olla ok.
- Haun syötteen tarkastus ja kaatumisen esto
- Suodattimien nollauksen tarkistus, mielestäni toimii nyt oikein