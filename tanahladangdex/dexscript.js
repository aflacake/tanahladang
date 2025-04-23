document.addEventListener("DOMContentLoaded", function () {
const header =  document.createElement("div");
header.style.display = "flex";
header.style.backgroundColor = "#0B932D";

const imgTL = document.createElement("img");
imgTL.src = 'https://raw.githubusercontent.com/aflacake/tanahladang/main/img/logotanahladang.png';
imgTL.style.width = "90px";
imgTL.style.height = "90px";
imgTL.style.padding = "10px";

const kontenDexHeader = document.createElement("div");

const h1Header = document.createElement("h1");
h1Header.textContent = "Tanah Ladang Dex";

const teksKontenDex = document.createElement("a");
teksKontenDex.textContent = "Daftar dex membantu mengidentifikasi berbagai jenis tanaman serta daftar lainnya yang membantu!";

kontenDexHeader.append(h1Header, teksKontenDex);



// dex
const daftarTL = document.createElement("div");
daftarTL.style.padding = "10px";
daftarTL.style.backgroundColor = "#0B932D";
daftarTL.style.borderRadius = "0 0 50% 0"

const dexTL = document.createElement("ul");
dexTL.style.display = "block";
dexTL.style.listStyle = "decimal";
dexTL.style.margin = '0';
dexTL.style.padding = '20px';

const barangMenu  = [
    { text: "tanamanMerah", link: '#tanamanMerah' },
    { text: "tanamanMerahBiasa", link: '#tanamanMerahBiasa' },
    { text: "tanamanMerahSuper", link: '#tanamanMerahSuper' },
    { text: "Air", link: '#air' },
    { text: "Udara", link: '#udara' }
];

barangMenu.forEach(item => {
    const liDaftarTL = document.createElement("li");
    liDaftarTL.style.marginRight = '20px';
    
    const linkDaftarTL = document.createElement("a");
    linkDaftarTL.textContent = item.text;
    linkDaftarTL.href = item.link;
    linkDaftarTL.style.color = "black";
    linkDaftarTL.style.textDecoration = "none";
    
    liDaftarTL.appendChild(linkDaftarTL);
    dexTL.appendChild(liDaftarTL);
});
daftarTL.appendChild(dexTL);

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        
        if(targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});



// daftar dex
const daftarDexTLNya = document.createElement("div")
daftarDexTLNya.style.padding = '20px';
daftarDexTLNya.style.backgroundColor = "#1EA3A8";


// tanamanMerah
const kontenTanamanMerah = document.createElement("div");
kontenTanamanMerah.style.backgroundColor = "#755727";
kontenTanamanMerah.style.padding = '7px';
kontenTanamanMerah.style.margin = '7px';

const judKontenTanaman = document.createElement("h2");
judKontenTanaman.textContent = "tanamanMerah";
judKontenTanaman.id = "tanamanMerah";

const teksKontenTanaman = document.createElement("p");
teksKontenTanaman.textContent = "Tanaman memiliki ciri tumbuh kembang dengan cara bawaan, suhu cuaca tidak dipengaruhi, cuaca ekstrem mungkin mempengaruhi cara tumbuh kembang namun secara bawaan tanaman ini selalu diberikan stok setiap pemain kehabisan tanaman bibit sebagai dana bantuan kepada para petahi ladang. Rata-rata mereka tumbuh dengan baik dengan cara perlakuan yang bawaan.";
kontenTanamanMerah.append(judKontenTanaman, teksKontenTanaman);


// tanamanMerahBiasa
const kontenTanamanMerahBiasa = document.createElement("div");
kontenTanamanMerahBiasa.style.backgroundColor = "#755727";
kontenTanamanMerahBiasa.style.padding = '7px';
kontenTanamanMerahBiasa.style.margin = '7px';

const judKontenTanamanBiasa = document.createElement("h2");
judKontenTanamanBiasa.textContent = "tanamanMerahBiasa";
judKontenTanamanBiasa.id = "tanamanMerahBiasa";

const teksKontenTanamanBiasa = document.createElement("p");
teksKontenTanamanBiasa.textContent = "Tanaman Biasa memiliki ciri tumbuh kembang dengan cara biasa, suhu cuaca sangat dipengaruhi, cuaca ekstrem mungkin mempengaruhi cara tumbuh kembang seperti rusaknya bibit muda dan bibit tua masih bertahan lama. Rata-rata mereka tumbuh dengan baik dengan cara perlakuan yang biasa.";
kontenTanamanMerahBiasa.append(judKontenTanamanBiasa, teksKontenTanamanBiasa);


// tanamanMerahSuper
const kontenTanamanMerahSuper = document.createElement("div");
kontenTanamanMerahSuper.style.backgroundColor = "#755727";
kontenTanamanMerahSuper.style.padding = '7px';
kontenTanamanMerahSuper.style.margin = '7px';

const judKontenTanamanSuper = document.createElement("h2");
judKontenTanamanSuper.textContent = "tanamanMerahSuper";
judKontenTanamanSuper.id = "tanamanMerahSuper";

const teksKontenTanamanSuper = document.createElement("p");
teksKontenTanamanSuper.textContent = "Tanaman Super memiliki ciri tumbuh kembang dengan cara superlitas, suhu cuaca dipengaruhi, cuaca ekstrem mungkin mempengaruhi cara tumbuh kembang seperti badai angin kecang, tanaman ini tidaklah mudah tercabit diperlakuan dengan cara superlitas. Rata-rata mereka tumbuh dengan paling baik dengan cara perlakuan yang superlitas.";
kontenTanamanMerahSuper.append(judKontenTanamanSuper, teksKontenTanamanSuper);



// air
const kontenAir = document.createElement("div");
kontenAir.style.backgroundColor = "#755727";
kontenAir.style.padding = '7px';
kontenAir.style.margin = '7px';

const judKontenAir = document.createElement("h2");
judKontenAir.textContent = "Air";
judKontenAir.id = "air";

const teksKontenAir = document.createElement("p");
teksKontenAir.textContent = "Sumber air terdpaat di dalam tanah, biasanya di Tanah Ladang air ditemukan di dalam sumur memenuhi kelangsungan hidup para kambingKrem serta tanananMerah.";
kontenAir.append(judKontenAir, teksKontenAir);


// udara
const kontenUdara = document.createElement("div");
kontenUdara.style.backgroundColor = "#755727";
kontenUdara.style.padding = '7px';
kontenUdara.style.margin = '7px';

const judKontenUdara = document.createElement("h2");
judKontenUdara.textContent = "Udara";
judKontenUdara.id = "udara";

const teksKontenUdara = document.createElement("p");
teksKontenUdara.textContent = "Sering terjadi badai kencang karena faktor lingkungan lahan luas, namun tanamanMerah kuat dalam rata-rata mnenerima tembakan keras mata arah angin yang dihasilkan";
kontenUdara.append(judKontenUdara, teksKontenUdara);


// append of structure
document.body.prepend(header);
header.append(imgTL, kontenDexHeader);

document.body.appendChild(daftarTL);

document.body.appendChild(daftarDexTLNya);
daftarDexTLNya.append(kontenTanamanMerah, kontenTanamanMerahBiasa, kontenTanamanMerahSuper, kontenAir, kontenUdara)
});
