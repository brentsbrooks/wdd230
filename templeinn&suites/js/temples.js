const requestURL = "js/temples.json";

fetch(requestURL)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject)
    const temples=jsonObject["temples"];
    temples.forEach(templeInfo)
});

function templeInfo(temple){
    let section=document.createElement("section");
    let name=document.createElement("h3");
    let logo=document.createElement("img");
    let address=document.createElement("p")
    let phone=document.createElement("p");
    let email=document.createElement("p")
  
    

    name.innerHTML=temple.name;
    logo.setAttribute("src",temple.icon);
    logo.setAttribute("alt",`${temple.name}'s logo`);
    address.innerHTML=`<b>Address:</b><br> ${temple.address}`;
    phone.innerHTML=`<b>Phone:</b><br> ${temple.phone}`;
    email.innerHTML=`<b>Email:</b><br> ${temple.email}`;
    
    

    section.appendChild(name);
    section.appendChild(logo);
    section.appendChild(address);
    section.appendChild(phone);
    section.appendChild(email)
    

    document.querySelector(".templeCards").appendChild(section);
};