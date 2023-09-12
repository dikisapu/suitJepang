let tanya = true;
while (tanya) {
  const user = prompt(`masukan Pilihan anda = Gajah, Orang, Semut`);

  let kom = Math.round(Math.random() * 3 + 1);

  if (kom < 2) {
    kom = "gajah";
  } else if (kom == 2) {
    kom = "orang";
  } else {
    kom = "semut";
  }
  console.log(kom);

  let Hasil = "";
  if (user == kom) {
    Hasil = "seri";
  } else if (user == "gajah") {
    Hasil = kom == "orang" ? "menang" : "kalah";
  } else if (user == "orang") {
    Hasil = kom == "semut" ? "menang" : "kalah";
  } else if (user == "semut") {
    Hasil = kom == "gajah" ? "menang" : "kalah";
  } else {
    Hasil = "ulang aja gan";
  }

  alert(
    `Kamu Memilih ${user}  dan Komputer memilih ${kom} \n Maka Hasilnya Kamu ${Hasil}`
  );

  tanya = confirm("lagi Yuk");
}
