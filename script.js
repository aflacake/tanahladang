document.addEventListener('DOMContentLoaded', function () {
//popKandangKambing
var popKandangKambing = document.getElementById("popPenyimpanan");
var btnRumahKambing = document.getElementById("rumahKambingBtn");

btnRumahKambing.onclick = function() {
    popKandangKambing.style.display = "block";
}


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
    if (event.target == popKandangKambing || event.target == popTokoBibit || event.target == popUpPanduan || event.target == popUpData || event.target == popUpKisah) {
        event.target.style.display = "none";
    }
  });



// background berdasarkan waktu
function setBackgroundBerdasarkanWaktu() {
    const bgWaktuSaatIni = new Date().getHours();
    const body = document.body;
    const lanskapMode = document.querySelector("pesanLanskap");
    const headerJud = document.querySelector("headerJud");
    const cuaca = document.querySelector("cuaca")
    
    if (bgWaktuSaatIni >= 6 && bgWaktuSaatIni < 12) {
        body.style.backgroundColor = "#1EA3A8";
    } else if (bgWaktuSaatIni >= 12 && bgWaktuSaatIni < 15) {
    body.style.backgroundColor = "#FBBF24";
    } else if (bgWaktuSaatIni >= 15 && bgWaktuSaatIni < 18) {
        body.style.backgroundColor = "#B6200C";
    } else {
        body.style.backgroundColor = "#000000";
    if (lanskapMode) {
            lanskapMode.style.color = "white";
    }
    if (headerJud) {
        headerJud.style.color = "white";
    }
    if (cuaca) {
        cuaca.style.color = "white";
    }
    }
}
setBackgroundBerdasarkanWaktu();
setInterval(setBackgroundBerdasarkanWaktu, 3600000);



// cuaca
function mendapatkanBulanIni() {
    const currentDate = new Date();
    return currentDate.getMonth();
}
function setCuacaDariBulan() {
    const bulan = mendapatkanBulanIni();
    const cuacaDiv = document.getElementById('cuaca');
    const pesanDiv = document.getElementById('pesanCuaca');
    
    if (bulan >= 5 && bulan <= 8) {
        // juni -  agustus
        cuacaDiv.textContent = 'Cuaca panas';
        pesanDiv.textContent = 'Nikmati cuaca yang cerah!';
        cuacaDiv.classList.add('terik');
        cuacaDiv.classList.remove('hujan');
    } else if (bulan >=9 && bulan <= 11) {
        // september - november
        cuacaDiv.textContent = 'Cuaca hujan';
        pesanDiv.textContent = 'Siapkan payung dan jas hujan, cuaca sedang hujan!';
        cuacaDiv.classList.add('hujan');
        cuacaDiv.classList.remove('terik');
    } else {
        // desember - mei
        cuacaDiv.textContent = 'Cuaca dingin';
        pesanDiv.textContent = 'Jaga tubuhmu agar tetap hangat!';
        cuacaDiv.classList.remove('terik');
        cuacaDiv.classList.remove('hujan');
    }
    
}
setCuacaDariBulan();


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



let totalPoin = parseInt(localStorage.getItem('totalPoin')) || 0;
let totalUang = parseInt(localStorage.getItem('totalUang')) || 5000;
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



//mbek!
document.getElementById("anakKambing").addEventListener('click', function() {
    const pesanKambing = document.getElementById("pesanMbek");
    pesanKambing.style.display = 'block';

    setTimeout(function() {
        pesanKambing.style.display = 'none';
    }, 5000); //5 detik
})

document.getElementById("kambingBetina").addEventListener('click', function() {
    const pesanKambingBetina = document.getElementById("pesanMbekBetina");
    pesanKambingBetina.style.display = 'block';

    setTimeout(function() {
        pesanKambingBetina.style.display = 'none';
    }, 5000); //5 detik
})

document.getElementById("kambingJantan").addEventListener('click', function() {
    const pesanKambingJantan = document.getElementById("pesanMbekJantan");
    pesanKambingJantan.style.display = 'block';

    setTimeout(function() {
        pesanKambingJantan.style.display = 'none';
    }, 5000); //5 detik
})


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
    }, durasiLapar * 1000);

    setTimeout(() => {
        haus = true;
        perbaruiStatusHewan();
    }, durasiHaus * 1000);
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



let levelRumahKambing = localStorage.getItem('levelRumahKambing') ? parseInt(localStorage.getItem('levelRumahKambing')) : 1;
uangBiayaRumahKambing = 3000;
const levelRumahKambingElement = document.getElementById("levelRumahKambing");
const levelUpRumahKambingBtn = document.getElementById("rumahKambingUpBtn");
const rumahKambingImgElement = document.getElementById("rumahKambing");

function upgradeRumahKambingImg() {
    if (levelRumahKambing >= 50) {
        rumahKambingImgElement.src = 'https://raw.githubusercontent.com/aflacake/tanahladang/second/img/tingkatkan-rumahkambing.png';
    } else {
        rumahKambingImgElement.src = 'https://github.com/aflacake/tanahladang/raw/second/img/rumahkambing.png';
    }
}

function levelUpBangunRmhKambing() {
    if (totalUang >= uangBiayaRumahKambing) {
            levelRumahKambing++;
            totalUang -= uangBiayaRumahKambing;
    
            levelRumahKambingElement.textContent = `${levelRumahKambing}`;
    
            localStorage.setItem('levelRumahKambing', levelRumahKambing);
            localStorage.setItem('totalUang', totalUang);

        upgradeRumahKambingImg();
    } else {
        alert("Uang tidak cukup untuk meningkatkan rumah kambing!")
    }
}
levelRumahKambingElement.textContent = `${levelRumahKambing}`;
levelUpRumahKambingBtn.addEventListener('click', levelUpBangunRmhKambing);
upgradeRumahKambingImg();



let levelPohonRmhBurung = localStorage.getItem('levelPohonRmhBurung') ? parseInt(localStorage.getItem('levelPohonRmhBurung')) : 1;
uangBiayaPohonBurung = 12000;
const levelPohonBurungElement = document.getElementById("levelPohonBurung");
const levelUpPohonBurungBtn = document.getElementById("pohonBurungUpBtn");
const pohonBurungImgElement = document.getElementById("pohonBurung");

function upgradePohonBurungImg() {
    if (levelPohonRmhBurung >= 220) {
        pohonBurungImgElement.src = 'https://raw.githubusercontent.com/aflacake/tanahladang/second/img/tingkatkan-pohondanrumahburung.png';
    } else if (levelPohonRmhBurung >= 110) {
        pohonBurungImgElement.src = 'https://raw.githubusercontent.com/aflacake/tanahladang/second/img/tingkatkan-pohonmati.png';
    } else if (levelPohonRmhBurung >= 30) {
        pohonBurungImgElement.src = 'https://raw.githubusercontent.com/aflacake/tanahladang/second/img/tingkatkan-pohontumbuh.png';
    }else {
        pohonBurungImgElement.src = 'https://raw.githubusercontent.com/aflacake/tanahladang/second/img/tingkatkan-pohonmati.png';
    }
}

function levelUpBangunPohonBurung() {
    if (totalUang >= uangBiayaPohonBurung) {
            levelPohonRmhBurung++;
            totalUang -= uangBiayaPohonBurung;
    
            levelPohonBurungElement.textContent = `${levelPohonRmhBurung}`;
    
            localStorage.setItem('levelPohonRmhBurung', levelPohonRmhBurung);
            localStorage.setItem('totalUang', totalUang);

        upgradePohonBurungImg();
    } else {
        alert("Uang tidak cukup untuk menghidupi pohon!")
    }
}
levelPohonBurungElement.textContent = `${levelPohonRmhBurung}`;
levelUpPohonBurungBtn.addEventListener('click', levelUpBangunPohonBurung);
upgradePohonBurungImg();



let levelSumur = localStorage.getItem('levelSumur') ? parseInt(localStorage.getItem('levelSumur')) : 1;
uangBiayaSumur = 10000;
const levelSumurElement = document.getElementById("levelSumur");
const levelUpSumurBtn = document.getElementById("levelUpSumur");
const sumurImgElement = document.getElementById("sumur");

function upgradeSumurImg() {
    if (levelSumur >= 50) {
        sumurImgElement.src = '';
    } else {
        sumurImgElement.src = 'https://raw.githubusercontent.com/aflacake/tanahladang/70fb96c92d1e706c91998087760ea1c8d6bbe15d/img/sumur.png';
    }
}

function levelUpBangunSumur() {
    if (totalUang >= uangBiayaSumur) {
            levelSumur++;
            totalUang -= uangBiayaSumur;
    
            levelSumurElement.textContent = `${levelSumur}`;
    
            localStorage.setItem('levelSumur', levelSumur);
        localStorage.setItem('totalUang', totalUang);
    } else {
        alert("Uang tidak cukup untuk meningkatkan sumur!")
    }
}
levelSumurElement.textContent = `${levelSumur}`;
levelUpSumurBtn.addEventListener('click', levelUpBangunSumur);



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
