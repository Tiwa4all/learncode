function myFunction() {
    var x = document.getElementById("list");
    if (x.style.display === "flex") {
      x.style.display = "";
    } else {
      x.style.display = "flex";
    }
  }
// var dash = document.querySelector('#sub-bar');
// dash.onclick = ()=>{
//   document.getElementById("cc").classList.toggle("active");
// }

var dash = document.querySelector('#sub-bar');
dash.onclick = ()=>{
  document.getElementById("cc").classList.toggle("active");
}

var cancel = document.getElementById("cancel");
cancel.onclick = ()=>{
  document.getElementById("cc").classList.toggle("active");
}
