/*
following features are pending to develop.
1. Add title
2. Mark a note as important
3. separate note by user
4. sync and host to web server
*/
console.log("NOTE APP");
// showNotes();



//if user add a note , add it to the localstorage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let notes = localStorage.getItem("notes");
    let title = localStorage.getItem("title");
    let addTxt = document.getElementById('addTxt');
    if (notes == null && title == null) {
        notesObj = [];
        titleObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
        titleObj = JSON.parse(title);
    }
    if (addTxt.value != "" && ttlTxt.value != "") {

        notesObj.push(addTxt.value);
        titleObj.push(ttlTxt.value);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        localStorage.setItem("title", JSON.stringify(titleObj));
        // addTxt.value = "";
        console.log(notesObj);
        console.log(titleObj);
    }
    showNotes()
});


let clrBtn = document.getElementById('clrBtn').addEventListener("click", function (el) {
    let addTxt = document.getElementById('addTxt');
    let ttlTxt = document.getElementById('ttlTxt');
    addTxt.value = "";
    ttlTxt.value = "";
});



let rfsBtn = document.getElementById('rfsBtn').addEventListener("click", function () {
    showNotes();
})
function showNotes() {
    let notes = localStorage.getItem('notes');
    let title = localStorage.getItem('title');
    if (notes == null) {
        notesObj = [];
        titleObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
        titleObj = JSON.parse(title);
    }
    let html = "";
    // notesObj.forEach(function (element, index) {
    //     title.forEach(function (el, ind){

    //         html += `
    //         <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
    //         <img src="img/img.png" class="card-img-top" alt="...">
    //         <div class="card-body">
    //         <h5 class="card-title"> ${el + 1} </h5>
    //         <p class="card-text">${element}</p>
    //         <button class="btn btn-primary" id="${index}" onclick="dltFun(this.id)">Delete Note</button>
    //         </div>
    //         </div>
    //         `;
    //         console.log("show");
    //     })
    // });

    for(let i=0;i<notesObj.length && i<titleObj.length;i++){
        html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <img src="img/img.png" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title" style="font-weight:600"> ${titleObj[i]} </h5>
            <p class="card-text">${notesObj[i]}</p>
            <button class="btn btn-primary" id="${i}" onclick="dltFun(this.id)">Delete Note</button>
            </div>
            </div>
            `;
            console.log("show");
    }
    let notesEln = document.getElementById('notes');
    let addTxt = document.getElementById('addTxt');
    let ttlTxt = document.getElementById('ttlTxt');
    if (addTxt.value == "" && ttlTxt.value == "") {
        // break;
        console.log("text area EMPTY");
    }
    else if (notesObj.length != 0 && ttlTxt.length != 0) {
        notesEln.innerHTML = html;
        console.log("text area not EMPTY");
    }
    console.log("refresh");
}

function dltFun(index) {
    console.log(index);
    console.log("this is deleting a note");
    let dltNote = localStorage.getItem('notes');
    let dltTitle = localStorage.getItem('title');

    if (dltNote == null && dltTitle == null) {
        notesObj = [];
        titleObj = [];
    }
    else {
        notesObj = JSON.parse(dltNote);
        titleObj = JSON.parse(dltTitle);
    }

    notesObj.splice(index, 1);
    titleObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    localStorage.setItem("title", JSON.stringify(titleObj));
    showNotes();
}


let dltAllBtn = document.getElementById('dltAllBtn');
dltAllBtn.addEventListener("click", function () {
    // localStorage.removeItem('notes');
    localStorage.clear();
    // localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
    location.reload();
});

let pgRefBtn = document.getElementById('pgRefBtn');
pgRefBtn.addEventListener("click", function () {
    location.reload();
});


let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let searchVal = search.value;
    console.log("search value : " + searchVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        console.log(cardTxt);
        if (cardTxt.includes(searchVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
});

let uprCasBtn = document.getElementById('uprCasBtn');
uprCasBtn.addEventListener("click",function(){
    let addTxt =  document.getElementById('addTxt');
    let uperCase = addTxt.value.toUpperCase();
    console.log(uperCase);
    document.getElementById('addTxt').value = uperCase;
});


let lwrCasBtn = document.getElementById('lwrCasBtn');
lwrCasBtn.addEventListener("click",function(){
    let addTxt =  document.getElementById('addTxt');
    let lowrCase = addTxt.value.toLowerCase();
    console.log(lowrCase);
    document.getElementById('addTxt').value = lowrCase;
});

let cptCasBtn = document.getElementById('cptCasBtn');
cptCasBtn.addEventListener("click",function(){
    let addTxt =  document.getElementById('addTxt');
    let captCase = addTxt.value.toCapitalCase();
    console.log(captCase);
    document.getElementById('addTxt').value = captCase;
});

function drkmod(){
    // document.body.style.color="white";
    // document.body.style.background="black";
    var drk = document.body;
    drk.classList.toggle("dark-mode");
    console.log("dark mode");
}
