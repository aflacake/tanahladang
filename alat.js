document.addEventListener('DOMContentLoaded', function () {
console.log("Bahasa Browser" + navigator.language);


// cek orientasi perangkat mengharuskan ke lanskap
function cekOrientasi() {
    if (window.innerWidth > window.innerHeight) {
        document.querySelector('.pesanLanskap').style.display = 'none';
        document.querySelector('.content').style.display = 'block';
    } else {
        // jika mode portait
        document.querySelector('.pesanLanskap').style.display = 'block';
        document.querySelector('.content').style.display = 'none';
    }
}
cekOrientasi();
window.addEventListener('resize', cekOrientasi);
window.addEventListener('orientationchange', cekOrientasi);



// loading
let kunjunganTerakhir = parseInt(localStorage.getItem('kunjunganTerakhir')) || 0;
waktuKunjunganSaatIni = new Date().getTime();

if (waktuKunjunganSaatIni - kunjunganTerakhir > 86400000) {
	localStorage.setItem('visited', 'false');
	localStorage.setItem('kunjunganTerakhir', waktuKunjunganSaatIni);
}
if (!localStorage.getItem('visited')) {
	localStorage.setItem('visited', 'true');
}
window.addEventListener('load', function() {
	document.getElementById('loading-screen').style.display = 'none';
	document.getElementById('main-konten').style.display = 'block';
});



// hari Senin, Selasa, Rabu dll
const hariArray = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const hariHari = new Date();
const hariHariIni = hariHari.getDay();
document.getElementById("hariA").textContent = hariArray[hariHariIni];
});




// fullscreen

const fullscreenTombol = document.getElementById("fullScreenBtn");

function sekarangmasukFullscreen() {
    return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
}
fullscreenTombol.addEventListener('click', function() {
    if (sekarangmasukFullscreen()) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        fullscreenTombol.textContent = "Masuk dari Mode Fullscreen";
    } else {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
      }
     fullscreenTombol.textContent = "Keluar dari Mode Fullscreen";
 }
});






// reset data
document.getElementById('resetGimBtn').addEventListener('click', function() {
    localStorage.clear();
    alert("Semua data gim telah dihapus, Anda tidak dapat memulihkannya");
    window.location.reload();
});



// play musik
const playMusikBtn = document.getElementById("playMusikBtn");
const audio = document.getElementById("backgroundMusik");

playMusikBtn.addEventListener('click', function() {
	if (audio.paused) {
		audio.play();	
		playMusikBtn.textContent = "Matikan musik";
	} else {
		audio.pause();
		playMusikBtn.textContent = "Nyalakan musik";
	}
});



// keamanan
const observer = new MutationObserver((mutationsList) => {
	for(const mutation of mutationsList) {
		if (mutation.type === 'attributes') {
			console.log('Atribut elemen berubah: ', mutation.target);
		}
	}
});
const config = { attributes: true, subtree: true };
observer.observe(document.body, config);



//status koneksi
document.addEventListener("DOMContentLoaded", function() {
function checkConnection() {
    const tidakAdaKoneksiDiv = document.getElementById("tidakAdaKoneksi");
    if (navigator.onLine) {
        tidakAdaKoneksiDiv.style.display="none";
    } else {
        tidakAdaKoneksiDiv.style.display="block";
    }
}
checkConnection();
window.addEventListener('online', checkConnection);
window.addEventListener('offline', checkConnection);
});
