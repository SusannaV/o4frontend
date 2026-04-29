Käynnistetään komennolla npm run dev
Komentorivi näyttää, mihin osoitteeseen se avautuu (varmaan aina http://localhost:5173/)
Pysäytetään komentorivillä ctrl + c


To do:
- Tuotekorttien sijoittaminen oikeaan kohtaan, 2 rinnakkain (ainakin, jos näyttö on tarpeeksi iso)
- Muu tyylittely
- Logon lisääminen
- Ostoskori-ikonin lisääminen
- Hakutuloslistan renderöinti lyhyempänä ja jotenkin laatikkomaisena

- Navigoinnin siirtäminen oikeampaan paikkaan (breadcrumbin tilalle) (useNavigate?)
- Etusivun teko
- Siirtymien toteuttaminen muille sivuille
- Muiden sivujen teko, jos ne tehdään
- Ilmoituksen lisääminen, jos suodattimet tai haku ei tuota yhtään tulosta
- Ilmoitus siitä, jos min hinta on isompi kuin max hinta?

Voisi olla kiva:
- Koot suodatetaan nyt .slicella. Jos dataan tulisi kokoja, jotka ovat alle 10 tai yli 99 tuumaa, ei koodi toimi.

Testattava:
- Hinta-suodattimen toiminta. Mielestäni kenttä tarkistaa nyt syötteet, eikä kaadu virheisiin.
- Haun syötteen tarkastus ja kaatumisen esto