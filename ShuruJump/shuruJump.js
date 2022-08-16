let obstacle;
let difficulty;
let screenWidth;

// let gameManager = new GameManager();

const shuruJumpGame = (c) => {
	c.setup = () => {
		c.createCanvas(500, 500);
		c.background(0);
		// shuruJumpGame.background(255);
		// gameManager.startGame();
	};

	c.draw = () => {

	};
}

// eslint-disable-next-line no-unused-vars, no-undef
let sketch_c = new p5(shuruJumpGame, document.getElementById("c"));

class GameManager {
	GameManager() {
		this.score = 0;
		this.win = false;
		this.lose = false;
		this.play = false;
		this.time = 0;
	}
}

// 	addTime() {
// 		this.time += 1;
// 	}

// 	startGame() {
// 		this.score = 0;
// 		this.win = false;
// 		this.lose = false;
// 		this.play = true;
// 		this.time = 0;
// 	}

// 	resetGame() {
// 		this.score = 0;
// 		this.win = false;
// 		this.lose = false;
// 		this.play = true;
// 		this.time = 0;
// 	}

// 	showWinScene() {

// 	}

// 	showLoseLog() {

// 	}
// }

// class GameUI {
// 	GameUI() {

// 	}
// }

// class Player {

// }

// class Obstacle {
// 	Obstacle() {
// 		this.type = ['monster', 'hurdle'];
// 		this.width;
// 		this.height;
// 		this.speed;
// 		this.graphic;
// 	}
// }