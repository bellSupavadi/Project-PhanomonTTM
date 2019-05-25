function myFunction() {
    var h = "";
    var i;
    for (i = 1; i < 32; i++) {
        h += "<option>" + i + "</option>";
        console.log(i)
document.getElementById("day").innerHTML = h;
    }
  
}