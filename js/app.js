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
    let addTxt = document.getElementById('addTxt');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    if (addTxt.value != "") {

        notesObj.push(addTxt.value);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        // addTxt.value = "";
        console.log(notesObj);
    }
    showNotes()
});


let clrBtn = document.getElementById('clrBtn').addEventListener("click", function (el) {
    let addTxt = document.getElementById('addTxt');
    addTxt.value = "";
});



let rfsBtn = document.getElementById('rfsBtn').addEventListener("click", function () {
    showNotes();
})
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <img src="img/img.png" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Note ${index + 1}</h5>
        <p class="card-text">${element}</p>
        <button class="btn btn-primary" id="${index}" onclick="dltFun(this.id)">Delete Note</button>
                    </div>
                    </div>
                    `;
    });
    let notesEln = document.getElementById('notes');
    let addTxt = document.getElementById('addTxt');
    if (addTxt.value == "") {
        // break;
        console.log("text area EMPTY");
    }
    else if (notesObj.length != 0) {
        notesEln.innerHTML = html;
    }
    console.log("refresh");
}

function dltFun(index) {
    console.log(index);
    console.log("this is deleting a note");
    let dltNote = localStorage.getItem('notes');

    if (dltNote == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(dltNote);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
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

