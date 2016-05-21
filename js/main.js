$(document).ready(function() {

 //Anytime you see swal, this references Sweet Alerts which is what I use for my alerts as an alternative to the alerts controlled by the browser

 // Objects within an object containing the four characters of the game
  var characters = {
    king: {
      health: 150,
      attack: 15,
      counterAttack: 20,
      img: "img/king.png",
      name: "The King",
    },
    hogRider: {
   	  health: 170,
      attack: 14,
      counterAttack: 8,
      img: "img/hog-rider.png",
      name: "Hog Rider",
    },
    prince: {
   	  health: 200,
      attack: 13,
      counterAttack: 8,
      img: "img/prince.png",
      name: "Prince",
    },
    barbarian: {
   	  health: 190,
      attack: 9,
      counterAttack: 10,
      img: "img/barbarian.png",
      name: "Barbarian",
    }
  };

  // Global Variables
  var charSelected = false;
  var opponentsLeft = 3;
  var opponentSelected = false;
  var myChar;
  var opponentChar;

  // Restarts the game
  function restartGame() {
    document.location.reload(true);
  }

  //Reset Button on click runs restartGame function
  $('#resetButton').on('click', function() {
      restartGame();
  });



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
        $('.chosenOpp').append(this);
        opponentChar = characters.king;
        $('#opp').html(opponentChar.name);
        console.log(opponentChar);
        $('#instructions').html("Press attack to begin combat!");
      }
      else {
        swal("Oops!", "You must defeat the current opponent before you can select another!", "error");
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
        $('.chosenOpp').append(this);
        opponentChar = characters.hogRider;
        $('#opp').html(opponentChar.name);
        console.log(opponentChar);
        $('#instructions').html("Press attack to begin combat!");
      }
      else {
        swal("Oops!", "You must defeat the current opponent before you can select another!", "error");
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
        $('.chosenOpp').append(this);
        opponentChar = characters.prince;
        $('#opp').html(opponentChar.name);
        console.log(opponentChar);
        $('#instructions').html("Press attack to begin combat!");
      }
      else {
        swal("Oops!", "You must defeat the current opponent before you can select another!", "error");
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
        $('.chosenOpp').append(this);
        opponentChar = characters.barbarian;
        $('#opp').html(opponentChar.name);
        console.log(opponentChar);
        $('#instructions').html("Press attack to begin combat!");
      }
      else {
        swal("Oops!", "You must defeat the current opponent before you can select another!", "error");
      }
    });

  }

  chooseChar();

  // On click function for the attack button. Displays battle details.
  $('#attackButton').on('click', function() {
    if (opponentSelected === true && myChar.health > 0 && opponentChar.health > 0) {
    opponentChar.health = opponentChar.health - myChar.attack;
    myChar.health = myChar.health - opponentChar.counterAttack;
    $('.myChar-health').html('<p>Health: ' +  myChar.health + '</p>');
    $('.opponent-health').html('<p>Health: ' +  opponentChar.health + '</p>');
    $('.battle-details').html('<p>You attacked ' + opponentChar.name + ' for ' + myChar.attack + ' damage</p>' + '<br>' + '<p>' + opponentChar.name + ' attacked you for ' + opponentChar.counterAttack + ' damage</p>');
    //Character attack gets 10 percent stronger each click
    myChar.attack = Math.round(myChar.attack * 1.1);
    }
    else {
      swal("Oops!", "Please select a new opponent before attacking!", "error");
    }

    //Alert dead when players character health is below 0
    if (myChar.health <= 0 && opponentChar.health > 0) {
      swal({title: "DEAD!",   text: "You fought well but came up short. Try harder next time!",   type: "error", confirmButtonColor: "#2ecc71",   confirmButtonText: "Restart Game", closeOnConfirm: true }, function(){restartGame();});
    }

    if (myChar.health <= 0) {
      swal({title: "DEAD!",   text: "You fought well but came up short. Try harder next time!",   type: "error", confirmButtonColor: "#2ecc71",   confirmButtonText: "Restart Game", closeOnConfirm: true }, function(){restartGame();});
    }

    //Alert when both characters kill each other at the same time
    if (myChar.health <= 0 && opponentChar.health <= 0) {
      swal({title: "DEAD!",   text: "Your character is dead but you killed your opponent too. Congrats, but you still lost!",   type: "error", confirmButtonColor: "#2ecc71",   confirmButtonText: "Restart Game",   closeOnConfirm: true }, function(){restartGame();});

    }

    //When player defeats enemy, reduce opponents left count by 1, removes character from the opponent div, alerts player to select another opponent
    if (opponentSelected === true && opponentChar.health <= 0){
      opponentsLeft--;

      opponentSelected = false;
      $('.chosenOpp').empty();
      $('.opponent-health').empty();
      $('.battle-details').empty();
      swal("Way to go!", "You defeated " + opponentChar.name + " Now select another opponent to battle!", "success");
      $('#instructions').html("Select a new opponent");
    }

    if (opponentsLeft === 0) {
      //swal("Winner!", "You have defeated all of the enemies!", "success");
      swal({title: "WINNER!",   text: "You have defeated all of the enemies!",   type: "success", confirmButtonColor: "#2ecc71",   confirmButtonText: "Restart Game",   closeOnConfirm: true }, function(){restartGame();});
    }
  });

});
