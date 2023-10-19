//axios import buraya gelecek

const { default: axios } = require("axios");

var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>

	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	NOT: API'den gelen bayrak url'i çalışmazsa alternatif olarak: https://flagsapi.com/
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek
//188.243.48.100 myIP

axios
  .get("https://apis.ergineer.com/ipgeoapi/188.243.48.100")

  .then((response) => {
    const cikti = organiseIP(response);
    document.querySelector(".cards").append(cikti);
  });

const organiseIP = () => {
  const card = document.createElement("div");
  card.className = "card";

  const image = document.createElement("img");
  image.setAttribute("src", "https://flagsapi.com/RU/shiny/64.png");

  card.append(image);

  const cardInfo = document.createElement("div");
  cardInfo.className = "card-info";
  card.append(cardInfo);

  const ip = document.createElement("h3");
  ip.className = "ip";
  ip.textContent = "188.243.48.100";
  cardInfo.append(ip);

  const ulkeAdi = document.createElement("p");
  ulkeAdi.className = "ulke";
  ulkeAdi.textContent = "Russia";
  cardInfo.append(ulkeAdi);

  const konum = document.createElement("p");
  konum.textContent = 59.9417;
  cardInfo.append(konum);

  const sehir = document.createElement("p");
  sehir.textContent = "St.-Petersburg";
  cardInfo.append(sehir);

  const saat = document.createElement("p");
  saat.textContent = "Europe/Moscow";
  cardInfo.append(saat);

  const para = document.createElement("p");
  para.textContent = "RUB";
  cardInfo.append(para);

  const isp = document.createElement("p");
  isp.textContent = "SkyNet LLC";
  cardInfo.append(isp);

  return card;
};

//const maincard = document.querySelector(".cards");
// maincard.append(organiseIP);

// console.log(organiseIP());

//.catch((error) => console.log(error));
