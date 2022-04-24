const year = new Date();
document.querySelector('#year').innerHTML = year.getFullYear();

const oLastModif = new Date(document.lastModified);
document.querySelector('#modified').innerHTML = oLastModif;