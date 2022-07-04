// HEADER

// Navigation
function toggleMenu(){
  document.querySelector("#primaryNav").classList.toggle("open");
  document.querySelector("#hamburgerBtn").classList.toggle("open");
}

const x = document.querySelector("#hamburgerBtn");
x.onclick = toggleMenu;

// Date
const datefieldUK = document.querySelector("#date");

const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
datefieldUK.innerHTML = `${fulldateUK}`;


// FOOTER
const year = new Date();
document.querySelector('#year').innerHTML = year.getFullYear();

const oLastModif = new Date(document.lastModified);
document.querySelector('#modified').innerHTML = oLastModif;



// BANNER
let d = new Date().getDay();

const banner = document.getElementById("banner");
if (d === 1 || d === 2) {
	banner.style.display = "flex";
	banner.style.justifyContent = "space-between";
}

const close1 = document.querySelector("#close");
close1.style.color = "red" ;
close1.addEventListener("click", () => {
	banner.style.display = "none";
});
