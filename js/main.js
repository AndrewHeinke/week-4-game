$(document).ready(function() {

 // Objects within an object containing the four characters of the game
  var characters = {
    king: {
      health: 320,
      attack: 10,
      counterAttack: 7,
      img: "img/king.png",
      name: "The King",
    },
    hogRider: {
   	  health: 150,
      attack: 40,
      counterAttack: 20,
      img: "img/hog-rider.png",
      name: "Hog Rider",
    },
    prince: {
   	  health: 225,
      attack: 35,
      counterAttack: 25,
      img: "img/prince.png",
      name: "Prince",
    },
    barbarian: {
   	  health: 420,
      attack: 30,
      counterAttack: 15,
      img: "img/barbarian.png",
      name: "Barbarian",
    }
  };

  var charSelected = false;
  var opponentsLeft = 3;
  var opponentSelected = false;
  var myChar;
  var opponentChar;

  // Display the images in their respective containers
  $(".king").html("<img src=" + characters.king.img + ">");
  $(".hogRider").html("<img src=" + characters.hogRider.img + ">");
  $(".prince").html("<img src=" + characters.prince.img + ">");
  $(".barbarian").html("<img src=" + characters.barbarian.img + ">");

  // Function upon click to sort characters as the players chosen character or the opponent
  function chooseChar() {
    $('.king').on('click', function() {
      if (charSelected === false) {
        charSelected = true;
        $('.chosenChar').append(this);
        myChar = characters.king;
        $('#chosen').html(myChar.name);
        console.log(myChar);
        $('#instructions').html("Now choose your opponent!");
      }
      else if (charSelected === true && opponentSelected === false) {
        opponentSelected = true;
        $('#opponent').append(this);
        opponentChar = characters.king;
        $('#opp').html(opponentChar.name);
        console.log(opponentChar);
        $('#instructions').html("Press attack to begin combat!");
      }
      else {
        alert("You must defeat the current opponent before you can select another!");
      }
    });

    $('.hogRider').on('click', function() {
      if (charSelected === false) {
        charSelected = true;
        $('.chosenChar').append(this);
        myChar = characters.hogRider;
        $('#chosen').html(myChar.name);
        console.log(myChar);
        $('#instructions').html("Now choose your opponent!");
      }
      else if (charSelected === true && opponentSelected === false) {
        opponentSelected = true;
        $('#opponent').append(this);
        opponentChar = characters.hogRider;
        $('#opp').html(opponentChar.name);
        console.log(opponentChar);
        $('#instructions').html("Press attack to begin combat!");
      }
      else {
        alert("You must defeat the current opponent before you can select another!");
      }
    });

    $('.prince').on('click', function() {
      if (charSelected === false) {
        charSelected = true;
        $('.chosenChar').append(this);
        myChar = characters.prince;
        $('#chosen').html(myChar.name);
        console.log(myChar);
        $('#instructions').html("Now choose your opponent!");
      }
      else if (charSelected === true && opponentSelected === false) {
        opponentSelected = true;
        $('#opponent').append(this);
        opponentChar = characters.prince;
        $('#opp').html(opponentChar.name);
        console.log(opponentChar);
        $('#instructions').html("Press attack to begin combat!");
      }
      else {
        alert("You must defeat the current opponent before you can select another!");
      }
    });

    $('.barbarian').on('click', function () {
      if (charSelected === false) {
        charSelected = true;
        $('.chosenChar').append(this);
        myChar = characters.barbarian;
        $('#chosen').html(myChar.name);
        console.log(myChar);
        $('#instructions').html("Now choose your opponent!");
      }
      else if (charSelected === true && opponentSelected === false) {
        opponentSelected = true;
        $('#opponent').append(this);
        opponentChar = characters.barbarian;
        $('#opp').html(opponentChar.name);
        console.log(opponentChar);
        $('#instructions').html("Press attack to begin combat!");
      }
      else {
        alert("You must defeat the current opponent before you can select another!");
      }
    });

  }

  chooseChar();

  // On click function for the attack button
  $('#attackButton').on('click', function() {
    if (opponentSelected === true) {
    myChar.attack = Math.round(myChar.attack * 1.1);
    opponentChar.health = opponentChar.health - myChar.attack;
    myChar.health = myChar.health - opponentChar.counterAttack;
    console.log("Opponent Character Health: " + opponentChar.health);
    console.log("My Character Attack: " + myChar.attack);
    console.log("My Character Health: " + myChar.health);
    }
  });

  // Restart Game Function
  function restartGame() {
    $('#resetButton').on('click', function() {
      var charSelected = false;
      var opponentsLeft = 3;
      var opponentSelected = false;
      var myChar;
      var opponentChar;
    });
  }











});
