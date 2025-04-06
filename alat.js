document.addEventListener('DOMContentLoaded', function () {
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



// hari Senin, Selasa, Rabu dll
const hariArray = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const hariHari = new Date();
const hariHariIni = hariHari.getDay();
document.getElementById("hariA").textContent = hariArray[hariHariIni];
});



// reset data
document.getElementById('resetGimBtn').addEventListener('click', function() {
	localStorage.clear();
	alert("Semua data gim telah dihapus, Anda tidak dapat memulihkannya");
	window.location.reload();
});
