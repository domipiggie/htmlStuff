class Szamla {
    cimzett;
    datum;
    osszeg;

    constructor(cim, dat, ossz){
        this.cimzett = cim;
        this.datum = dat;
        this.osszeg = parseFloat(ossz);
    }
}

szamlak = [];

function szamlaKezelo(){
    szamlaHozzaadas();
    szamlaKiiras(szamlak[szamlak.length-1]);
    szamlaAdatokKiiras();
}

function szamlaHozzaadas(){
    cimzett = document.getElementById("cimzett").value;
    datum = document.getElementById("datum").value;
    osszeg = document.getElementById("osszeg").value;

    szamlak.push(new Szamla(cimzett, datum, osszeg));
}

function szamlaKiiras(szamla){
    tableBody = document.getElementById("tbody");

    const tableRow = document.createElement("tr");
    tableBody.appendChild(tableRow);

    const cimzettCella = document.createElement("td");
    cimzettCella.innerHTML = szamla.cimzett;
    tableRow.appendChild(cimzettCella);

    const datumCella = document.createElement("td");
    datumCella.innerHTML = szamla.datum;
    tableRow.appendChild(datumCella);

    const osszegCella = document.createElement("td");
    osszegCella.innerHTML = szamla.osszeg;
    tableRow.appendChild(osszegCella);
}

function szamlaAdatok(){
    osszegzes = szamlak[0].osszeg;
    min = szamlak[0].osszeg;
    max = szamlak[0].osszeg;
    atlag = 0;

    for(i = 1; i < szamlak.length; i++){
        osszegzes += szamlak[i].osszeg;

        if (szamlak[i].osszeg > max){
            max = szamlak[i].osszeg;
        }
        if (szamlak[i].oszzeg < min){
            min = szamlak[i].oszzeg;
        }
    }

    atlag = osszegzes/szamlak.length;

    return [osszegzes, atlag.toFixed(2), min, max];
}

function szamlaAdatokKiiras(){
    adatok = szamlaAdatok()

    document.getElementById("osszesitett").innerHTML = adatok[0];
    document.getElementById("atlag").innerHTML = adatok[1];
    document.getElementById("min").innerHTML = adatok[2];
    document.getElementById("max").innerHTML = adatok[3];
}