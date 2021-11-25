let items = Array.from(document.querySelectorAll(".item"))
// let dropZones = Array.from(document.querySelectorAll(".dropZone"))
let bigball = document.querySelector(".ball")


items.forEach(item => {
    item.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text", e.target.id)
        console.log("Drag Start");
    })

    item.addEventListener("dragend", () => {
        console.log("Drag End");
    })
})
bigball.ondragenter = function(){}
bigball.ondragleave = function(){}
bigball.ondragover = function(e){
    e.preventDefault();
}

bigball.ondrop = function (e) {

    let droppedColorId = e.dataTransfer.getData("text")
    console.log(droppedColorId);
    bigball.style.backgroundColor = droppedColorId;
    console.log("Color Changed");
}




