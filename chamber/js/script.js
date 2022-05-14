const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};


const year = new Date();
document.querySelector('#year').innerHTML = year.getFullYear();

const oLastModif = new Date(document.lastModified);
document.querySelector('#modified').innerHTML = oLastModif;

const datefieldUK = document.querySelector("#date");

const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
datefieldUK.innerHTML = `${fulldateUK}`;
