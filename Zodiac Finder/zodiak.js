zodiak.onclick = function () {
    let bln = document.querySelector("#bulan").value;
    let tgl = document.querySelector("#tanggal").value;
    let c = "data kosong";
    if ((tgl >= 21 && tgl <= 31 && bln == 3 || tgl >= 1 && tgl <= 19 && bln == 4)) {
        c = "ARIES";
    }
    if ((tgl >= 20 && tgl <= 30 && bln == 4 || tgl >= 1 && tgl <= 20 && bln == 5)) {
        c = "TAURUS";
    }
    if ((tgl >= 21 && tgl <= 31 && bln == 5 || tgl >= 1 && tgl <= 20 && bln == 6)) {
        c = "GEMINI";
    }
    if ((tgl >= 21 && tgl <= 30 && bln == 6 || tgl >= 1 && tgl <= 22 && bln == 7)) {
        c = "CANCER";
    }
    if ((tgl >= 23 && tgl <= 31 && bln == 7 || tgl >= 1 && tgl <= 22 && bln == 8)) {
        c = "LEO";
    }
    if ((tgl >= 23 && tgl <= 31 && bln == 8 || tgl >= 1 && tgl <= 22 && bln == 9)) {
        c = "VIRGO";
    }
    if ((tgl >= 23 && tgl <= 30 && bln == 9 || tgl >= 1 && tgl <= 22 && bln == 10)) {
        c = "LIBRA";
    }
    if ((tgl >= 23 && tgl <= 31 && bln == 10 || tgl >= 1 && tgl <= 21 && bln == 11)) {
        c = "SCORPION";
    }
    if ((tgl >= 22 && tgl <= 30 && bln == 11 || tgl >= 1 && tgl <= 21 && bln == 12)) {
        c = "SAGITTARIUS";
    }
    if ((tgl >= 22 && tgl <= 31 && bln == 12 || tgl >= 1 && tgl <= 19 && bln == 1)) {
        c = "CAPCRICORN";
    }
    if ((tgl >= 20 && tgl <= 31 && bln == 1 || tgl >= 1 && tgl <= 18 && bln == 2)) {
        c = "AQUARIUS";
    }
    if ((tgl >= 19 && tgl <= 29 && bln == 2 || tgl >= 1 && tgl <= 20 && bln == 3)) {
        c = "PISCES";
    }
    document.querySelector("#hasil").innerHTML = c;
}