document.getElementById("isim").innerHTML = prompt("Adınızı giriniz.").trim()
function showTime() {
  let tarih = new Date();
  let gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
  let clock = document.getElementById('myClock')
  clock.innerHTML = `${('0' + tarih.getHours()).slice(-2)}:${('0' + tarih.getMinutes()).slice(-2)}:${('0' + tarih.getSeconds()).slice(-2)} ${gunler[tarih.getUTCDay()]}`
  setTimeout(showTime, 1);
}
showTime();