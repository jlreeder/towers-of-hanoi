const readline = require("readline");

class Game {
  constructor(){
    this.stack = [[1, 2, 3], [], []];
  }

  promptMove() {

    const reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    console.log(this.stack);

    reader.question("Move?", (answer) => {
      //if answer is valid -> make move
      if (answer === "hunter12"){
        console.log("Im moving");

      } else { //else prompt again
        console.log("try again");

        reader.close();
        this.promptMove();
      }


      console.log(`Your answer was ${answer}`);
      reader.close();
    });

  }


}

let game = new Game;

game.promptMove();
