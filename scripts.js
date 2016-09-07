/**
 * Created by OMMHOA on 21/05/16.
 */
var faceNumber = 5;

function clrscr(){
    var leftDiv = document.getElementById("leftDiv");
    while(leftDiv.firstChild)
        leftDiv.removeChild(leftDiv.firstChild);
    var rightDiv = document.getElementById("rightDiv");
    while(rightDiv.firstChild)
        rightDiv.removeChild(rightDiv.firstChild);
}

function show_faces(){
    clrscr();
    for(var i=0;i<faceNumber;i++){
        var top= Math.floor(Math.random() * 450);
        var left= Math.floor(Math.random() * 450);
        var smiley = document.createElement("img");
        smiley.src = "smiley.png";
        smiley.style.top=top + "px";
        smiley.style.left=left + "px";
        smiley.style.width="50px";
        smiley.style.height="50px";
        leftDiv.appendChild(smiley);
        rightDiv.appendChild(smiley.cloneNode(false));
        smiley.addEventListener("click", badClick);
    }
    var extraOne = document.createElement("img");
    extraOne.src = "smiley.png";
    top= Math.floor(Math.random() * 450);
    left= Math.floor(Math.random() * 450);
    extraOne.style.top = top + "px";
    extraOne.style.left = top + "px";
    extraOne.style.width = "50px";
    extraOne.style.height = "50px";
    leftDiv.appendChild(extraOne);
    extraOne.addEventListener("click",goodClick);
}

function goodClick() {
    faceNumber+= 5;
    addRandomStar();
    show_faces();
}

function badClick() {
    clrscr();
    faceNumber= 5;
    leftDiv.textContent = "Game Over";
    var link = document.createElement("a");
    link.href = "#";
    link.style.textDecoration="none";
    link.style.color="black";
    rightDiv.appendChild(link);
    rightDiv.lastElementChild.textContent = "Replay?";
    link.addEventListener("click", show_faces);
}

function addRandomStar(){
    var star = document.createElement("img");
    star.src="star.png";
    star.style.width="30px;";
    star.style.height="30px";
    star.style.top= Math.floor(Math.random() * 120) + "px";
    star.style.left= Math.floor(Math.random() * 975) + "px";
    document.getElementById("topDiv").appendChild(star);
}
