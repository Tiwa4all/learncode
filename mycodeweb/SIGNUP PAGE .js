

var checkbox = document.querySelector("#checkbox")
var checkstatus = document.querySelector("#checkstatus")

checkbox.onchange = function(){
    if(this.checked){
        checkstatus.innerHTML = "I agree to the term of user";
    }
    else(checkstatus.innerHTML = "I disagree to the term of user")
}