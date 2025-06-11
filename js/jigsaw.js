var rows = 5, columns = 5;

var currTile;
var otherTile;

window.onload = function() {        
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let img = document.createElement("img");
            img.src = "./assets/kerraJigsaw/blank.jpg";
            img.style.width = "3.2rem";
            img.style.height = "4.8rem";

            img.addEventListener("dragstart", dragStart);
            img.addEventListener("dragover", dragOver);
            img.addEventListener("dragenter", dragEnter);
            img.addEventListener("dragleave", dragLeave);
            img.addEventListener("drop", dragDrop);
            img.addEventListener("dragend", dragEnd);

            document.getElementById("board").appendChild(img);
        }
    }

    let shuffled = Array.from({length: 25}, (_, i) => i + 1);
    shuffled.forEach((v, i, a) => {
        let j = Math.floor(Math.random() * (a.length - i)) + i;
        shuffled[i] = shuffled[j];
        shuffled[j] = v;
    })


    for (let i = 0; i < shuffled.length; i++) {
        let img = document.createElement("img");
        img.src = "./assets/kerraJigsaw/" + shuffled[i] + ".jpg";
        img.style.width = "3.2rem";
        img.style.height = "4.8rem";
    
        img.addEventListener("dragstart", dragStart);
        img.addEventListener("dragover", dragOver);
        img.addEventListener("dragenter", dragEnter);
        img.addEventListener("dragleave", dragLeave);
        img.addEventListener("drop", dragDrop);
        img.addEventListener("dragend", dragEnd);

        document.getElementById("pieces").appendChild(img);
    }

    var img = document.createElement("img");
    img.src = "./assets/kerraJigsaw/blank.jpg";
    img.style.width = "3.2rem";
    img.style.height = "4.8rem";
    
    document.getElementById("pieces").appendChild(img);
}

function dragStart() {
    // if (currTile.src.includes("blank")) {
    //     return;
    // }

    currTile = this;
}

function dragOver(e) { e.preventDefault(); }

function dragEnter(e) { e.preventDefault(); }

function dragLeave() {}

function dragDrop() {
    otherTile = this;
}

function dragEnd() {
    if (currTile.src.includes("blank")) {
        return;
    }
    
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    checkComplete();
}

function checkComplete() {    
    let descendants = document.getElementById("board").getElementsByTagName("*"); 
        
    for (let i = 0; i < descendants.length; i++) {
        index = (i + 1).toString();

        let e = descendants[i];

        if (!e.src.includes(index)) { return; }
    }

    let heart = document.getElementById("heart");
    heart.style.display = "block";
}