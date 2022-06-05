//DOM

let mySetZoo = new Set([]);

function add() {
  var infoInput = document.getElementById("info").value;
  mySetZoo.add(infoInput);
  let addZooList = [...mySetZoo];
  document.getElementById("animal").innerHTML = addZooList;
}
function del() {
  var infoInput = document.getElementById("info").value;
  mySetZoo.delete(infoInput);
  let delZooList = [...mySetZoo];
  document.getElementById("animal").innerHTML = delZooList;
}
function check() {
  var infoInput = document.getElementById("info").value;

  if (mySetZoo.has(infoInput) === true) {
    document.getElementById("animal").innerHTML = "Có trong danh sách";
  } else {
    document.getElementById("animal").innerHTML = "Không trong danh sách";
  }
}
function print() {
  let printList = [...mySetZoo];
  document.getElementById("animal").innerHTML = printList;
  console.log(printList);
}
