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

