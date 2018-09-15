// ----- Global Variables ----- //

// Has the user selected their character
var characterSelected = false;

// Has the user selected the defender
var defenderSelected = false;

// Variable to store the user's chosen character
var character = {};

// Variable to store the chosen enemy
var defender = {};

// Number of enemies defeated
var enemiesDefeated = 0;

// Boolean to indicate whether or not the game is over
gameOver = false;

// ----- Character Objects ----- //

var vader = {
  name: "Darth Vader",
  health: 2000,
  baseAttack: 19,
  attack: 19
};

var luke = {
  name: "Luke Skywalker",
  health: 1700,
  baseAttack: 30,
  attack: 30
};

var nien = {
  name: "Nien",
  health: 750,
  baseAttack: 47,
  attack: 47
};

var greedo = {
  name: "Greedo",
  health: 400,
  baseAttack: 75,
  attack: 75
};

// ----- Helper Functions ----- //

// This function will initialize the character value from the global object variables defined above
function initializeCharacter(chosenCharacter) {
  character.name = chosenCharacter.name;
  character.health = chosenCharacter.health;
  character.baseAttack = chosenCharacter.baseAttack;
  character.attack = chosenCharacter.attack;
}

// This function will initialize the enemy's value from the global object variables defined above
function initializeDefender(chosenDefender) {
  defender.name = chosenDefender.name;
  defender.health = chosenDefender.health;
  defender.baseAttack = chosenDefender.baseAttack;
  defender.attack = chosenDefender.attack;
}

// This function will move the remaining characters to the enemies section
function moveToEnemies() {
  $(".available-character").removeClass("available-character").addClass("enemy-character");
  $("#enemies-available").append($(".enemy-character"));
}

// This function will reset the state of the game
function resetGame() {
  // Reset all the health values to the original
  $("#vader-character").children(".health").html(vader.health);
  $("#luke-character").children(".health").html(luke.health);
  $("#nien-character").children(".health").html(nien.health);
  $("#greedo-character").children(".health").html(greedo.health);

  $(".character-image").removeClass("chosen-character enemy-character defender-character").addClass("available-character");
  var available = $(".available-character").show();
  $("#characters-available").html(available);

  $("#game-message").empty();
  $("#restart").hide();
  

  characterSelected = false;
  defenderSelected = false;
  enemiesDefeated = 0;
  gameOver = false;

  character = {};
  defender = {};

  
}

if (characterSelected === true) {
    
}

// ----- Main Routine ----- //

// Run Javascript when the HTML has finished loading
$(document).ready(function() {

  // Hide the "Restart" button on document load
  $("#restart").hide();
  $(".un-needed-text").hide();
  $(".fight-text").hide();

  // Determine which character the user has clicked
  $("#vader-character").on("click", function () {
    console.log("Darth Vader is selected");

    // User is choosing the character
    if(characterSelected == false) {
      $("#game-message").empty();

      // Set the user's character
      initializeCharacter(vader);
      characterSelected = true;

      $('#chosen-character').hide();

      //Change character's poistioning
      $('#vader-image').attr('src', './assets/images/VaderBack.png');
      $('#vader-image').attr('style', 'width:375px;');

      //Hide available characters and header
      $("#characters-available").hide();
      

      // Display the chosen character
      $("#vader-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);
      $("#vader-image:last-child").remove()
      $(".un-needed-text").show();

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if($("#vader-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        // Set the user's enemy
        initializeDefender(vader);
        defenderSelected = true;

        // Show chosen character and hide other enemies.
        $('#chosen-character').show();
        $(".fight-text").show();
        $('#enemies-available').hide();
        $("#jumbotron1").hide();

        // Add the character to the defender section
        $("#vader-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

 // Determine which character the user has clicked
 $("#luke-character").on("click", function () {
    console.log("Luke Skywalker is selected");

    // User is choosing the character
    if(characterSelected == false) {
      $("#game-message").empty();

      // Set the user's character
      initializeCharacter(luke);
      characterSelected = true;

      $('#chosen-character').hide();

      //Change character's poistioning
      $('#luke-image').attr('src', './assets/images/LukeBack.png');
      $('#luke-image').attr('style', 'width:375px;');

      //Hide available characters and header
      $("#characters-available").hide();
      

      // Display the chosen character
      $("#luke-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);
      $("#luke-image:last-child").remove()
      $(".un-needed-text").show();

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if($("#luke-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        // Set the user's enemy
        initializeDefender(luke);
        defenderSelected = true;

        // Show chosen character and hide other enemies.
        $('#chosen-character').show();
        $(".fight-text").show();
        $('#enemies-available').hide();
        $("#jumbotron1").hide();

        // Add the character to the defender section
        $("#luke-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

 // Determine which character the user has clicked
 $("#nien-character").on("click", function () {
    console.log("Nien is selected");

    // User is choosing the character
    if(characterSelected == false) {
      $("#game-message").empty();

      // Set the user's character
      initializeCharacter(nien);
      characterSelected = true;

      $('#chosen-character').hide();

      //Change character's poistioning
      $('#nien-image').attr('src', './assets/images/NienBack.png');
      $('#nien-image').attr('style', 'width:375px;');

      //Hide available characters and header
      $("#characters-available").hide();
      

      // Display the chosen character
      $("#nien-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);
      $("#nien-image:last-child").remove()
      $(".un-needed-text").show();

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if($("#nien-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        // Set the user's enemy
        initializeDefender(nien);
        defenderSelected = true;

        // Show chosen character and hide other enemies.
        $('#chosen-character').show();
        $(".fight-text").show();
        $('#enemies-available').hide();
        $("#jumbotron1").hide();

        // Add the character to the defender section
        $("#nien-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

 // Determine which character the user has clicked
 $("#greedo-character").on("click", function () {
    console.log("Greedo is selected");

    // User is choosing the character
    if(characterSelected == false) {
      $("#game-message").empty();

      // Set the user's character
      initializeCharacter(greedo);
      characterSelected = true;

      $('#chosen-character').hide();

      //Change character's poistioning
      $('#greedo-image').attr('src', './assets/images/GreedoBack.png');
      $('#greedo-image').attr('style', 'width:375px;');

      //Hide available characters and header
      $("#characters-available").hide();
      

      // Display the chosen character
      $("#greedo-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);
      $("#greedo-image:last-child").remove()
      $(".un-needed-text").show();

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if($("#greedo-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        // Set the user's enemy
        initializeDefender(greedo);
        defenderSelected = true;

        // Show chosen character and hide other enemies.
        $('#chosen-character').show();
        $(".fight-text").show();
        $('#enemies-available').hide();
        $("#jumbotron1").hide();

        // Add the character to the defender section
        $("#greedo-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#attack").on("click", function() {
    console.log("Attack selected");

    console.log("character = " + JSON.stringify(character));
    console.log("defender = " + JSON.stringify(defender));

    // User is ready to attack the defender
    if (characterSelected && defenderSelected && !gameOver) {
      // User attacks the defender and decreases the defender's health points
      defender.health = defender.health - character.attack;
      $(".defender-character").children(".health").html(defender.health);
      $("#game-message").html("<h1 class='jumbotron border border-warning shadow'>You attacked " + defender.name + " for " + character.attack + " damage.</h1>");

      // User's attack power increases
      character.attack = character.attack + character.baseAttack;

      // If defender is still alive, they counter attack the user
      if (defender.health > 0) {
        character.health = character.health - defender.baseAttack;
        $(".chosen-character").children(".health").html(character.health);

        // Check if the user survives the attack
        if (character.health > 0) {
          $("#game-message").append("<h1 class='jumbotron border border-warning shadow'>" + defender.name + " attacked you back for " + defender.baseAttack + " damage.</h1>");
        } else {
          gameOver = true;
          $("#game-message").html("<h1 class='jumbotron border border-warning shadow'>You were defeated... womp womp...</p><p>Play again?</h1>");
          $("#restart").show();
        }
      } else {
        // Defender is defeated
        enemiesDefeated++;
        defenderSelected = false;
        $("#game-message").html("<h1 class='jumbotron border border-warning shadow'>You have defeated " + defender.name + ". Choose another enemy.</h1>");
        $(".defender-character").hide();

        $("#enemies-available").show();
        $("#jumbotron1").show();
        $(".fight-text").hide();
        $("#chosen-character").hide();
        

        // Check if the user has won the game
        if (enemiesDefeated === 3) {
          gameOver = true;
          $("#game-message").html("<h1 class='jumbotron border border-warning shadow'>You have won the game!!!</h1>");
          $("#restart").show();
          $('#enemies-available').hide();
        }
      }
    } else if (!characterSelected && !gameOver) {
      $("#game-message").html("<h1 class='jumbotron border border-warning shadow'>You must first select your game character.</h1>");
    } else if (!defenderSelected && !gameOver) {
      $("#game-message").html("<h1 class='jumbotron border border-warning shadow'>You must choose an enemy to fight.</h1>");
    }
  });

  $("#restart").on("click", function() {
    location.reload();
    
    // $(".un-needed-text").show();
    // $(".fight-text").show();
    // $('#characters-available').show();
    resetGame();



  });

}); // Main routine
