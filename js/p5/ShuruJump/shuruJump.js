let obstacle;
let difficulty;
let screenWidth;
let value = 0;

// let gameManager = new GameManager();

const shuruJumpGame = (c) => {
	c.setup = () => {
		c.createCanvas(c.windowWidth, 500);
		// c.background(0);
		// shuruJumpGame.background(255);
		// gameManager.startGame();
	};

	c.draw = () => {
		c.fill(value,100,100);
		c.rect(0,0,100,100);
	};

	c.keyPressed = function() { // 이걸로 점프 만들면 됨
		if (c.keyCode === 16) {
			value = 255;
		}
	}
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