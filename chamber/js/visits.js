
const lastDisplay = document.querySelector(".day-since");
const visitsDisplay = document.querySelector(".visits");


let numVisits = Number(window.localStorage.getItem("visits-ls"));
let lastVisit = Number(window.localStorage.getItem("visits-number"));

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}
if (lastVisit !== 0) {
	lastDisplay.textContent =Math.trunc((Date.now() - lastVisit)/86400000);
} else {
	lastDisplay.textContent = `This is your first visit!`;
}
 
numVisits++;
lastVisit = Date.now();

localStorage.setItem("visits-ls", numVisits);
localStorage.setItem("visits-number", lastVisit)

