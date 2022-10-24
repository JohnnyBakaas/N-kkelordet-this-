//Denne html-koden lager en tabell med to rader og to celler: <table><tr><td>o</td><td>o</td></tr><tr><td>o</td><td>o</td></tr></table>
//Utvid tabellen med flere rader og flere kolonner. Sørg så for at når man har musepekeren over en celle, så endrer innholdet seg fra o til x.

const oToX = (variabelen) => {
  let htmlContnt = variabelen.innerHTML;
  if (htmlContnt == "O") {
    variabelen.innerHTML = "X";
  } else {
    variabelen.innerHTML = "O";
  }
};
