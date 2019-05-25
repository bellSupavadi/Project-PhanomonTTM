$(document).ready(function(){
  $(".register").click(function(){
    $(".other").show();
    $(".content").hide();
    $(".register").addClass('active');
    $(".login").removeClass('active');
  });
  $(".login").click(function(){
    $(".content").show();
    $(".other").hide();
    $(".login").addClass('active');
    $(".register").removeClass('active');
  });
});

// function myFunction() {
//   var h = "";
//   var fDay = 1 ;
//   var lDay = 31;
//   for (var i = fDay; i <= lDay; i++) {
//       h += "<option>" + i + "</option>";
//       console.log(i)

//   }
// document.getElementById("day").innerHTML = h;
// }

var firebaseConfig = {
  apiKey: "AIzaSyBNRq5FqP_x4xMTXbki_ir825uJMnCw0QE",
  authDomain: "phanomonttm.firebaseapp.com",
  databaseURL: "https://phanomonttm.firebaseio.com",
  projectId: "phanomonttm",
  storageBucket: "phanomonttm.appspot.com",
  messagingSenderId: "39151834196",
  appId: "1:39151834196:web:f581d3e227550098"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function database(){
  var name = document.getElementById('name');
  var uname = document.getElementById('uname');
  var email = document.getElementById('email');
  var pass = document.getElementById('pass');
  var repass = document.getElementById('repass');
  insertData(name.value, uname.value, email.value, pass.value, repass.value) 
}
function insertData(name, uname, email, pass, repass){
  var firebaseRef = firebase.database().ref("users");
  firebaseRef.push({
name:name,
uname:uname,
email:email,
pass:pass,
repass:repass


  });
  console.log("success")
}