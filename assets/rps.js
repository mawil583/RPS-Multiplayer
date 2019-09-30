$(document).ready(function() {

console.log("dog")

var firebaseConfig = {
    apiKey: "AIzaSyAQBhNDFuDWIq-sqDAE_TIx3aabGh9jnQs",
    authDomain: "rocks-paper-scissors-bec21.firebaseapp.com",
    databaseURL: "https://rocks-paper-scissors-bec21.firebaseio.com",
    projectId: "rocks-paper-scissors-bec21",
    storageBucket: "",
    messagingSenderId: "1081333086634",
    appId: "1:1081333086634:web:7bfd539ef9c1cb63e913d3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

      let database = firebase.database();

      let clickcount = 32;

      database.ref().set(
          {
            clicked: clickcount
          }
      );

      console.log("cat")
    //   let playersRef = database.ref("/players");

    // let player1Name = $("#inputPassword2").val();


})