var playerOneRock = false;
var playerOnePaper = false;
var playerOneScissors = false;

var playerTwoRock = false;
var playerTwoPaper = false;
var playerTwoScissors = false;

var p1Wins = 0;
var p1Losses = 0;
var ties = 0;
var p2Wins = 0;
var p2Losses = 0;


var firebaseConfig = {
  apiKey: "AIzaSyCFPw0rt12DAvELoOcHdIomTZwyrReMang",
  authDomain: "rock-paper-scissors-e686c.firebaseapp.com",
  databaseURL: "https://rock-paper-scissors-e686c.firebaseio.com",
  projectId: "rock-paper-scissors-e686c",
  storageBucket: "",
  messagingSenderId: "682832063608",
  appId: "1:682832063608:web:56e9e33e3c16d2cb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();


// on button click, log user choice to firebase... if both user one and user two have chosen, run the checking function

$("#playerOne").on("click", ".p1Button", function() {
  // alert("working")
  event.preventDefault();
  var player1Choice = $(this).attr("value");
  $(this).attr("data-val", "true");
  $("#playerOne").attr("data-live", "true");
  
  var playerData = {
    player1: player1Choice
    }
  database.ref().update(playerData);
  
  // console.log(player1Choice);
}); 

$("#playerTwo").on("click", ".p2Button", function() {
  // alert("working")
  event.preventDefault();
  var player2Choice = $(this).attr("value");
  $(this).attr("data-val", "true");
  $("#playerTwo").attr("data-live", "true");
  
  var playerData = {
    player2: player2Choice
 
  }
  database.ref().update(playerData);
  
  // console.log(player2Choice);
});

$("#player1Btn").on("click", function(){
// alert("working!")
event.preventDefault();
var br = $("<div>")
var p1Chat = $("#player1Chat").val().trim()

$(".chatBox").append("Player 1: " + p1Chat, br);
})


database.ref().on("value", function (childSnapshot) {
  var p1Choice = childSnapshot.val().player1;
  // $("#playerOne").attr("data-live", "true");
  var p2Choice = childSnapshot.val().player2;
  // $("#playerTwo").attr("data-live", "true");

  console.log(p1Choice);
  console.log(p2Choice);

  // if ($("#playerOne").val("data-live", "true") &&  $("#playerTwo").val("data-live", "true")){
  //   alert("working!")
  // }

  // if ((p1Choice === "Rock") || (p1Choice === "Paper") || (p1Choice === "Scissors")) {}
  
   if (
      (p1Choice === "Rock" && p2Choice === "Scissors") ||
      (p1Choice === "Scissors" && p2Choice === "Paper") || 
      (p1Choice === "Paper" && p2Choice === "Rock")
      ) 
      {
      p1Wins++;
      p2Losses++;
      $("#display").text("Player 1 WINS!!!")
      clear();
      } 
     else if (
      (p2Choice === "Rock" && p1Choice === "Scissors") ||
      (p2Choice === "Scissors" && p1Choice === "Paper") || 
      (p2Choice === "Paper" && p1Choice === "Rock")){
      p2Wins++;
      p1Losses++;
      $("#display").text("Player 2 WINS!!!")
      clear();
    } else if (p1Choice === p2Choice) {
      ties++;
      $("#display").text("Tie Game, Play Again.")
      clear();
    }

    // console.log(p1Wins);
    $("#p1Wins").text(p1Wins)
    // console.log("player 1 wins: ", p1Wins);
    $("#p1Losses").text(p1Losses);
    // console.log("player 1 losses: ", p1Losses);
    $("#ties").text(ties)
    // console.log("ties: ", ties);
    $("#p2Wins").text(p2Wins)
    // console.log("player 2 wins: ", p2Wins);
    $("#p2Losses").text(p2Losses);
    // console.log("player 2 losses: ", p2Losses);
  }
  )
  
  function clear () {

    database.ref().remove()
  }







  //  // function that allows the user to click a still gif and turn it on or off
  //  $("#displayGifs").on("click", ".gif", function() {
  //   var state = $(this).attr("data-state");

















