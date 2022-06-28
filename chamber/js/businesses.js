const requestURL = "json/data.json";

fetch(requestURL)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject)
    const companies=jsonObject["companies"];
    companies.forEach(companyInfo)
});

function companyInfo(company){
    let section=document.createElement("section");
    let name=document.createElement("h3");
    let phone=document.createElement("p");
    let website=document.createElement("p");
    let membership=document.createElement("p");
    let logo=document.createElement("img");

    name.innerHTML=company.name;
    phone.innerHTML=`Phone:<br> ${company.phone}`;
    website.innerHTML=`Website:<br> <a href="${company.website}" target="_blank">${company.website}</a>`;
    membership.innerHTML=`Membership level:<br> ${company.membershipLevel}`;
    logo.setAttribute("src",company.icon);
    logo.setAttribute("alt",`${company.name}'s logo`);

    section.appendChild(name);
    section.appendChild(logo);
    section.appendChild(website);
    section.appendChild(phone);
    section.appendChild(membership);

    document.querySelector(".businessCards").appendChild(section);
};


//  grid or list view

const grid= document.querySelector("#grid");
const list=document.querySelector("#list");
const display = document.querySelector(".businessCards");

grid.addEventListener("click", () => {
	
	display.classList.add("grid");
	display.classList.remove("list");
});

list.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
