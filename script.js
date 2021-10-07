
const counter  = document.getElementById("counter");
const decrease = document.getElementById("decrease");
const restore = document.getElementById("restore");
const increase = document.getElementById("increase");
const table = document.getElementById("table");
const store = document.getElementById("store");

let countervar = 0;

counter.innerHTML = countervar;

increase.addEventListener("click", function(){
    countervar++;
    counter.innerHTML = countervar;
})

decrease.addEventListener("click", function(){
    countervar--;
    counter.innerHTML = countervar;
})

restore.addEventListener("click", function(){
    countervar = 0;
    counter.innerHTML = countervar;
});

store.addEventListener("click", function(){
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    //GATHERING CURRENT DATE
    let dt = new Date();
    let day = dt.getDate();
    let month = dt.getMonth();
    let year = dt.getFullYear();

    cell1.innerHTML =  day + "-" + month + "-" + year;
    cell2.innerHTML = countervar;
    
    //CREATING DELETE BUTTON
    let addbtn = document.createElement("button");
    let addbtnclass = addbtn.classList.add("btn", "btn-dark");
    
    //CREATING FONT AWESOME ICON FROM DELETE BUTTON
    let addFA = document.createElement("i");
    let setFAclass = addFA.classList.add("delete", "fas", "fa-trash");

    //APPEDING DELETE BUTTON TO THE TABLE
    cell3 = cell3.appendChild(addbtn).appendChild(addFA);

})

table.addEventListener("click", function(e){
    let item = e.target;
    if (item.classList[0] == "delete") {
        let parent = item.parentElement.parentElement.parentElement;
        parent.remove();
        
    }
})




