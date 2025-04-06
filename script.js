document.addEventListener('DOMContentLoaded', function () {
// popBeliBibit
var popTokoBibit = document.getElementById("popTokoBibit");
var btnBeliBibit = document.getElementById("tokoBibit");

btnBeliBibit.onclick = function() {
    popTokoBibit.style.display = "block";
}

// popPanduan
var popUpPanduan = document.getElementById("popPanduanBermain");
var btnPanduan = document.getElementById("panduanBermain");

btnPanduan.onclick = function() {
    popUpPanduan.style.display = "block";
}

// popDataMu
var popUpData = document.getElementById("popDataMu");
var btnData = document.getElementById("dataMu");

btnData.onclick = function() {
    popUpData.style.display = "block";
}

// popKisah
var popUpKisah = document.getElementById("popKisah");
var btnKisah =  document.getElementById("kisah");

btnKisah.onclick = function() {
    popUpKisah.style.display = "block";
}
window.addEventListener('click', function(event) {
    if (event.target == popTokoBibit || event.target == popUpPanduan || event.target == popUpData || event.target == popUpKisah) {
        event.target.style.display = "none";
    }
  });



// background berdasarkan waktu
function setBackgroundBerdasarkanWaktu() {
    const bgWaktuSaatIni = new Date().getHours();
    const body = document.body;
    const h1A = document.getElementById("judul");
    const pA = document.getElementById("deskrip");
    const jamA = document.getElementById("jamA");
    const waktuBermainA = document.getElementById("waktuBermain");
    
    if (bgWaktuSaatIni >= 6 && bgWaktuSaatIni < 12) {
        body.style.backgroundColor = "#1EA3A8";
    } else if (bgWaktuSaatIni >= 12 && bgWaktuSaatIni < 15) {
    body.style.backgroundColor = "#FBBF24";
    } else if (bgWaktuSaatIni >= 15 && bgWaktuSaatIni < 18) {
        body.style.backgroundColor = "#B6200C";
    } else {
        body.style.backgroundColor = "#000000";   
    }
}
setBackgroundBerdasarkanWaktu();
setInterval(setBackgroundBerdasarkanWaktu, 3600000);



let mulaiWaktu = Date.now();
function waktuBermainTanahLadang() {
    let waktuSaatini = Date.now();
    let elapsedTime = (waktuSaatini - mulaiWaktu) / 1000;
    document.getElementById("jamBermain").textContent = Math.floor(elapsedTime) + ' detik';
}
setInterval(waktuBermainTanahLadang, 1000);

function jamSaatIni() {
  const sekarang = new Date();
  let jamjam = sekarang.getHours();
  let menit =sekarang.getMinutes();

  jamjam = (jamjam < 10) ? '0' + jamjam : jamjam;
  menit = (menit < 10) ? '0' + menit : menit;

  const timeString = jamjam + "." + menit;
  document.getElementById('jam').textContent = timeString;
}
setInterval(jamSaatIni, 1000);
jamSaatIni();



// farm
const farm = document.getElementById("farm");
const tiles = 50;

function membuatLadang() {
    for (let i = 0; i < tiles; i++) {
        const tanah = document.createElement('div');
        tanah.classList.add('tanah');
        tanah.addEventListener('click', () => tanamAtauPanen(tanah));
        farm.appendChild(tanah);
    }
}
membuatLadang();

function tanamAtauPanen(tanah) {
const tanahTertanam = tanah.classList.contains('tertanam');
const tanahSiapPanen = tanah.classList.contains('panen');

    if (tanahTertanam) {
	if (tanahSiapPanen) {
        	tanah.classList.remove('panen');
        	tanah.textContent = "";
        
        	totalPoin += 3;
        	totalUang += 7000;
		perbaruiInfoPoinUang();

		tanah.classList.remove('tertanam');
		localStorage.removeItem('timeLeft-' + tanah.dataset.id);
	} 
    } else {
	if (totalBibit > 0) {
        	tanah.classList.add('tertanam');
        	tambahTanaman(tanah);
		totalBibit -= 1;
		localStorage.setItem('totalBibit', totalBibit);
		document.getElementById('bibit').textContent = totalBibit;

        tanah.classList.add('panen');
	localStorage.setItem(tanah.dataset.id, 'panen');
    } else {
	alert("Bibit tanaman habis! belilah di toko");
  }
 }
}

function tambahTanaman(tanah) {
    const tanaman= document.createElement('img');
    tanaman.src = 'https://raw.githubusercontent.com/aflacake/tanahladang/second/img/tanamanbuahmerah.png';
    tanaman.classList.add('gambarTanamanMerah');
    tanah.appendChild(tanaman);

	tanah.classList.add('panen');
}

function hapusTanaman(tanah) {
    const tanaman = tanah.querySelector('.gambarTanamanMerah');
	if (tanaman) {
        	tanaman.remove();
    	}
	tanah.classList.remove("tertanam");
	tanah.textContent = '';

	tanah.classList.add('tertanam');
}

function perbaruiStatusTanamanDiLadang() {
	const semuaTanah = document.querySelectorAll('.tanah');
	
	semuaTanah.forEach(tanah => {
		const tanahId = tanah.dataset.id;
		const statusTanaman = localStorage.getItem(tanahId);
			
		if (statusTanaman === 'panen') {
			tanah.classList.add('panen');
		} else if (statusTanaman === 'tertanam') {
			tanah.classList.add('tertanam');
		} else {
			tanah.classList.remove('tertanam', 'panen');
		}
	});
}
perbaruiStatusTanamanDiLadang();



let totalPoin = 0;
let totalUang = parseInt(localStorage.getItem('totalUang')) || 200000;
console.log('Total Uang di localStorage:', totalUang);
let totalBibit = parseInt(localStorage.getItem('totalBibit')) || 10;

// data pada UI
document.getElementById('uang').textContent = "Rp" + totalUang;
function perbaruiInfoPoinUang() {
    document.getElementById('poin').textContent = totalPoin;
    document.getElementById('uang').textContent = "Rp" + totalUang;
	document.getElementById('bibit').textContent = totalBibit;

	localStorage.setItem('totalPoin', totalPoin);
	localStorage.setItem('totalUang', totalUang);
	localStorage.setItem('totalBibit', totalBibit);
}
perbaruiInfoPoinUang();



let lapar = false;
let haus = false;
let durasiLapar = getRandomDuration();
let drasiHaus = getRandomDuration();

function getRandomDuration() {
	return Math.floor(Math.random() * (90 - 60 + 1)) + 60;
}
function perbaruiStatusHewan() {
	const statusTeks = document.getElementById('statusHewan');

	if (lapar && haus) {
		statusTeks.textContent = "Hewanmu lapar dan haus, segera beri makan dan minum!";
	} else if (lapar) {
		statusTeks.textContent = "Hewanmu lapar, segera beri makan!";
	} else if (haus) {
		statusTeks.textContent = "Hewanmu haus, segera beri minum!";
	} else {
		statusTeks.textContent = "Hewanmu dalam kondisi baik";
	}
}
function perbaruiKondisi() {
	setTimeout(() => {
		lapar = true;
		perbaruiStatusHewan();
	}, durasiLapar * 10000);

	setTimeout(() => {
		haus = true;
		perbaruiStatusHewan();
	}, durasiHaus * 10000);
}
function beriMakan() {
	if (lapar) {
		lapar = false;
		durasiLapar = getRandomDuration();
		perbaruiStatusHewan();
		alert("Hewanmu sekarang kenyang!");
	} else {
		alert("Hewanmu tidak lapar");
	}
}
function beriMinum() {
	if (haus) {
		haus = false;
		durasiHaus = getRandomDuration();
		perbaruiStatusHewan();
		alert("Hewanmu sekarang kenyang!");
	} else {
		alert("Hewanmu tidak haus");
	}
}
document.getElementById('beriMakan').addEventListener('click', beriMakan);
document.getElementById('beriMinum').addEventListener('click', beriMinum);
perbaruiStatusHewan();



document.getElementById('totalUangSpan').textContent = totalUang;
function beliBibitTanamanMerah() {
	if (totalUang >= 2500) {
		totalUang -= 2500;
		totalBibit += 1;
		localStorage.setItem('totalUang', totalUang);
		localStorage.setItem('totalBibit', totalBibit);
		document.getElementById('totalUangSpan').textContent = totalUang;
		alert("Pembelian bibit biasa sah! sisa uang: " + totalUang);
		perbaruiInfoPoinUang();
	} else {
		alert("Uang tidak cukup untuk membeli bibit tanamanMerah"); 
	}
}
document.getElementById('beliBibitBtn').addEventListener('click', beliBibitTanamanMerah);

function beliBibitTanamanMerahSuper() {
	if (totalUang >= 10000) {
		totalUang -= 10000;
		totalBibit += 1;
		localStorage.setItem('totalUang', totalUang);
		localStorage.setItem('totalBibit', totalBibit);
		document.getElementById('totalUangSpan').textContent = totalUang;
		alert("Pembelian bibit super sah! sisa uang: " + totalUang);
		perbaruiInfoPoinUang();
	} else {
		alert("Uang tidak cukup untuk membeli bibit tanamanMerahSuper"); 
	}
}
document.getElementById('beliBibitSuperBtn').addEventListener('click', beliBibitTanamanMerahSuper);
});
